/*
 * ============================================================================
 *  form-guard.js — Luda Instruments 表单防垃圾（隐私友好，无蜜罐）
 * ============================================================================
 *
 *  设计目标
 *  --------
 *  本站表单 POST 到 Formspark（submit-form.com/6LgD1nY1K）。Formspark 在提交
 *  被判定为垃圾时会 *静默丢弃*：不存库、不发通知、也不执行 _redirect。因为本
 *  站保持「提交后跳转 thank-you」的传统方式，一旦验证失败，访客看到的是「点了
 *  提交页面毫无反应」。所以前端必须做到两件事：
 *
 *    1. 未通过校验时，在本地就拦住提交，并给出明确提示；
 *    2. 通过校验才真正放行给 Formspark。
 *
 *  三层防护
 *  --------
 *  第 1 层  reCAPTCHA v2 勾选框 —— 未勾选禁止提交（挡脚本）
 *  第 2 层  内容启发式校验 —— 长度 + 可读词数（挡「随机串」式机器人）
 *  第 3 层  Formspark 后台「自定义垃圾关键词」—— 需在后台配置，见 README
 *
 *  明确不做的事
 *  ------------
 *  ✗ 不设蜜罐字段。蜜罐被误填会静默丢掉真实询盘，且无从察觉。
 *  ✗ 不拦一次性邮箱域名。经与站方确认，保守优先：用了正规邮箱手工发广告的
 *    仍然会通过，这部分交给 Formspark 后台的关键词过滤处理。
 *  ✗ 不拦非拉丁字符。俄语、中文、阿拉伯语客户一律放行（见 isNonLatinDominated）。
 *
 *  接入方式
 *  --------
 *  每个含表单的页面，在最后一个业务 <script> 之后加载：
 *      <script src="/form-guard.js"></script>
 *  脚本会自行识别页面上的表单类型，无需页面传参。
 * ============================================================================
 */
(function () {
    'use strict';

    /* ========================================================================
     * ① 配置区 —— 唯一需要你手动修改的地方
     * ======================================================================*/
    var CONFIG = {

        /* --------------------------------------------------------------------
         * reCAPTCHA v2 Site Key（网站密钥 / 公开密钥，放前端是安全的）
         *
         * 站点信息：
         *   类型    : reCAPTCHA v2
         *   子类型  : "I'm not a robot" Checkbox —— 必须选这个子类型
         *   域名    : ludatest.com / www.ludatest.com
         *
         * 已配置。如需更换，只替换下面这一行的值（保持单引号）。
         *
         * ⚠️ 请注意区分两个密钥：
         *   Site Key（这一行）  = 网站密钥，公开的，放前端 ✓
         *   Secret Key          = 私密密钥，只能填 Formspark 后台
         *                         表单 6LgD1nY1K → Settings → Spam Protection
         *                         → 选 “Google reCAPTCHA v2” → 填入 Secret Key
         * ------------------------------------------------------------------ */
        siteKey: '6LeqXOEtAAAAAP5BFoeMRbD99HIOYgJL5j_rc2rV',

        /* --------------------------------------------------------------------
         * 内容校验阈值（保守设置）
         * ------------------------------------------------------------------ */

        // 正文最少字符数（含空格）。低于此值直接判定为无效。
        minMessageLength: 10,

        // 正文中最少需要几个「可读英文单词」（见 countReadableWords）。
        // 2 是保守下限：只挡 “m2t441”“https://bt9b37ef.google.com/r” 这类
        // 完全不成句的内容，不会为难 “Need price” 这种简短询价。
        minReadableWords: 2,

        // 校验失败时是否给出提示。
        //   false = 静默拦截（不告诉机器人为什么失败，但真实访客会困惑）
        //   true  = 在提交按钮下方显示一行提示（推荐，体验优先）
        showHintOnBlock: true
    };

    /* ========================================================================
     * ② 多语言提示文案
     * ======================================================================*/
    var TEXTS = {
        en: {
            captchaRequired: 'Please tick the "I\'m not a robot" box before sending.',
            captchaLoading: 'Loading verification…',
            messageTooShort: 'Please describe your requirement in a little more detail so we can quote accurately.',
            messageUnclear: 'Your message does not look complete. Please tell us briefly what you need.',
            sending: 'Sending…'
        },
        es: {
            captchaRequired: 'Marque la casilla "No soy un robot" antes de enviar.',
            captchaLoading: 'Cargando la verificación…',
            messageTooShort: 'Describa su necesidad con un poco más de detalle para poder cotizar con precisión.',
            messageUnclear: 'Su mensaje no parece completo. Indíquenos brevemente qué necesita.',
            sending: 'Enviando…'
        },
        fr: {
            captchaRequired: 'Veuillez cocher la case « Je ne suis pas un robot » avant l\'envoi.',
            captchaLoading: 'Chargement de la vérification…',
            messageTooShort: 'Merci de décrire votre besoin un peu plus en détail pour que nous puissions chiffrer précisément.',
            messageUnclear: 'Votre message semble incomplet. Indiquez-nous brièvement votre besoin.',
            sending: 'Envoi…'
        },
        ar: {
            captchaRequired: 'يرجى تحديد المربع "أنا لست روبوتًا" قبل الإرسال.',
            captchaLoading: 'جارٍ تحميل التحقق…',
            messageTooShort: 'يرجى وصف متطلباتك بمزيد من التفصيل حتى نتمكن من تقديم عرض سعر دقيق.',
            messageUnclear: 'رسالتك تبدو غير مكتملة. أخبرنا بإيجاز بما تحتاجه.',
            sending: 'جارٍ الإرسال…'
        }
    };

    function getPageLang() {
        var m = (window.location.pathname || '').match(/^\/([a-z]{2})\//);
        return (m && TEXTS[m[1]]) ? m[1] : 'en';
    }

    var T = TEXTS[getPageLang()];

    /* ========================================================================
     * ③ 工具函数
     * ======================================================================*/

    /** 统计「可读英文单词」数量。
     *  单词 = 至少 3 个字符、以字母开头、且含元音（排除 xkcd / m2t441 / qr69ln）。 */
    function countReadableWords(text) {
        if (!text) return 0;
        var tokens = text.split(/\s+/);
        var count = 0;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i].replace(/^[^A-Za-z]+/, ''); // 去掉前导标点/引号
            if (token.length < 3) continue;
            if (!/^[A-Za-z]/.test(token)) continue;
            if (!/[aeiouAEIOU]/.test(token)) continue;
            count++;
        }
        return count;
    }

    /** 判断文本是否「以非拉丁文字为主」。
     *  这类文本无法用英文词数衡量（比如整句俄语/中文会被算成 0 个单词），
     *  为避免误伤非英语客户，只要长度达标就直接放行。 */
    function isNonLatinDominated(text) {
        if (!text) return false;
        // 拉丁字母
        var latin = (text.match(/[A-Za-z]/g) || []).length;
        // 非拉丁字母：西里尔 / 希腊 / 阿拉伯 / 希伯来 / 中日韩 / 泰 / 天城文
        var nonLatin = (text.match(/[\u0400-\u04FF\u0370-\u03FF\u0600-\u06FF\u0590-\u05FF\u4E00-\u9FFF\u3040-\u30FF\u0E00-\u0E7F\u0900-\u097F]/g) || []).length;
        if (nonLatin === 0) return false;
        return nonLatin >= latin;
    }

    /** 校验正文。返回 null 表示通过，否则返回提示文案。 */
    function validateMessage(value) {
        var text = (value || '').trim();

        // 长度门槛
        if (text.length < CONFIG.minMessageLength) return T.messageTooShort;

        // 非拉丁文字直接放行
        if (isNonLatinDominated(text)) return null;

        // 拉丁文字：要求达到最少可读词数
        if (countReadableWords(text) < CONFIG.minReadableWords) return T.messageUnclear;

        return null;
    }

    /* ========================================================================
     * ④ 表单类型识别
     * ======================================================================*/

    /** 目录下载模态框表单：只有 name / email / company / country，没有 message。
     *  它的输入项少且都很结构化（邮箱类型由浏览器强制校验），内容启发式对它
     *  没有意义，所以这一层只作用于联系表单。 */
    function findContactForm() {
        // 优先按类名
        var form = document.querySelector('form.contact-form');
        if (form) return form;

        // 退路：找带 message 文本域、且提交到 formspark 的表单
        var forms = document.querySelectorAll('form');
        for (var i = 0; i < forms.length; i++) {
            var f = forms[i];
            var action = f.getAttribute('action') || '';
            if (action.indexOf('submit-form.com') === -1) continue;
            if (f.querySelector('textarea[name="message"]')) return f;
        }
        return null;
    }

    function ensureStatusEl(form) {
        // 若表单内已有反馈容器则复用，否则在最后创建一个
        var el = form.querySelector('.fg-status');
        if (el) return el;

        el = document.createElement('div');
        el.className = 'fg-status';
        el.setAttribute('role', 'status');
        el.setAttribute('aria-live', 'polite');
        form.appendChild(el);
        return el;
    }

    function setStatus(form, message, kind) {
        if (!CONFIG.showHintOnBlock && kind === 'warn') return;
        var el = ensureStatusEl(form);
        el.textContent = message || '';
        el.className = 'fg-status' + (kind ? ' fg-' + kind : '');
    }

    /* ========================================================================
     * ⑤ reCAPTCHA v2 接入
     * ======================================================================*/

    function loadRecaptchaApi() {
        if (window.__fgRecaptchaLoading) return;
        window.__fgRecaptchaLoading = true;

        var s = document.createElement('script');
        s.src = 'https://www.google.com/recaptcha/api.js?onload=onFormGuardRecaptchaApiLoad&render=explicit';
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
    }

    // reCAPTCHA 的 callback 必须是全局函数
    window.onFormGuardRecaptchaApiLoad = function () {
        window.__fgRecaptchaReady = true;
        renderAllWidgets();
    };

    window.onFormGuardCaptchaSuccess = function () {
        // 勾选成功 → 允许提交
        for (var i = 0; i < widgetForms.length; i++) {
            setSubmitEnabled(widgetForms[i], true);
        }
    };

    window.onFormGuardCaptchaExpired = function () {
        // token 会过期（约 2 分钟）→ 重新禁用，避免提交必然失败
        for (var i = 0; i < widgetForms.length; i++) {
            setSubmitEnabled(widgetForms[i], false);
            setStatus(widgetForms[i], T.captchaRequired, 'warn');
        }
    };

    /** 记录「表单 → 提交按钮」的对应关系，供全局回调使用 */
    var widgetForms = [];

    function renderAllWidgets() {
        if (!window.grecaptcha || !window.grecaptcha.render) return;

        var hosts = document.querySelectorAll('[data-fg-recaptcha]');
        for (var i = 0; i < hosts.length; i++) {
            var host = hosts[i];
            if (host.getAttribute('data-fg-rendered') === '1') continue;

            try {
                window.grecaptcha.render(host, {
                    sitekey: CONFIG.siteKey,
                    callback: 'onFormGuardCaptchaSuccess',
                    'expired-callback': 'onFormGuardCaptchaExpired'
                });
                host.setAttribute('data-fg-rendered', '1');
            } catch (e) {
                // 同一容器重复渲染会抛错，忽略即可
                if (window.console) console.warn('[form-guard] recaptcha render failed:', e);
            }
        }
    }

    /* ========================================================================
     * ⑥ 提交按钮状态
     * ======================================================================*/

    function getSubmitButton(form) {
        return form.querySelector('button[type="submit"], input[type="submit"]');
    }

    function setSubmitEnabled(form, enabled) {
        var btn = getSubmitButton(form);
        if (!btn) return;

        if (!btn.hasAttribute('data-fg-original-text')) {
            btn.setAttribute('data-fg-original-text', btn.innerHTML);
        }

        btn.disabled = !enabled;
        btn.classList.toggle('fg-disabled', !enabled);
    }

    function markSending(form) {
        var btn = getSubmitButton(form);
        if (!btn) return;
        btn.innerHTML = T.sending;
        btn.classList.add('fg-sending');
    }

    /* ========================================================================
     * ⑦ 组装
     * ======================================================================*/

    function init() {
        var form = findContactForm();
        var captchaHosts = document.querySelectorAll('[data-fg-recaptcha]');

        // ---- 没有联系表单，也没有 reCAPTCHA 容器（例如产品页）→ 不做事 ----
        if (!form && captchaHosts.length === 0) return;

        // 判断 Site Key 是否已正确配置。
        // reCAPTCHA v2 的 Site Key 形如：40 位，以 “6L” 开头，仅含 Base64URL 字符。
        // 用格式校验而不是匹配某个占位符字符串，这样换成任何别的占位符都能被识别出来，
        // 避免把无效 key 送进 grecaptcha.render() 导致表单彻底无法提交。
        var siteKeyConfigured = /^6L[0-9A-Za-z_-]{38}$/.test(CONFIG.siteKey || '');

        // ---- contact 表单：内容校验 + reCAPTCHA 门槛 ----
        if (form) {
            widgetForms.push(form);

            // 先禁用提交，等勾选 reCAPTCHA 后再启用
            setSubmitEnabled(form, false);

            if (!siteKeyConfigured) {
                // Site Key 缺失或格式不对：不禁用按钮，避免站点完全无法提交询盘
                setSubmitEnabled(form, true);
                if (window.console) {
                    console.warn('[form-guard] reCAPTCHA Site Key 未正确配置（应为 40 位、以 “6L” 开头），' +
                                 '已暂时跳过人机验证。请检查 form-guard.js 的 CONFIG.siteKey。');
                }
            }

            var messageField = form.querySelector('textarea[name="message"], input[name="message"]');
            var lastWarnedValue = null;

            if (messageField) {
                messageField.addEventListener('input', function () {
                    var problem = validateMessage(messageField.value);

                    if (problem) {
                        // 只有在内容长度已经越过下限、但语义无效时才提示，
                        // 避免用户刚敲第一个字母就被警告
                        if (messageField.value.trim().length >= CONFIG.minMessageLength) {
                            if (lastWarnedValue !== messageField.value) {
                                setStatus(form, problem, 'warn');
                                lastWarnedValue = messageField.value;
                            }
                        }
                    } else {
                        setStatus(form, '', '');
                        lastWarnedValue = null;
                    }
                });
            }

            form.addEventListener('submit', function (e) {
                // ① 内容校验
                if (messageField) {
                    var problem = validateMessage(messageField.value);
                    if (problem) {
                        e.preventDefault();
                        setStatus(form, problem, 'warn');
                        if (messageField.focus) messageField.focus();
                        return;
                    }
                }

                // ② reCAPTCHA 校验
                if (siteKeyConfigured && window.grecaptcha && window.grecaptcha.getResponse) {
                    var response = '';
                    try { response = window.grecaptcha.getResponse(); } catch (err) { response = ''; }
                    if (!response) {
                        e.preventDefault();
                        setStatus(form, T.captchaRequired, 'warn');
                        return;
                    }
                }

                // ③ 放行 —— 防止用户重复点击造成 token 复用失败
                setStatus(form, '', '');
                markSending(form);
                setSubmitEnabled(form, false);
            });
        }

        // ---- 加载 reCAPTCHA（仅在页面上确实有容器时） ----
        if (captchaHosts.length > 0 && siteKeyConfigured) {
            if (window.grecaptcha && window.grecaptcha.render) {
                renderAllWidgets();
            } else {
                loadRecaptchaApi();
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
