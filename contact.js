/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-25 10:48:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-03-28 13:53:51
 * @FilePath: \myEricChen.github.io\contact.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function() {
    if (!window.ludaData) {
        console.error('Data not found! Make sure /data/data.js is loaded.');
        return;
    }

    const { categories } = window.ludaData;

    /**
     * 从当前页面 URL 中提取语言代码（如 'en', 'fr', 'es', 'ar'）
     * 假设 URL 格式为 /语言代码/...，例如 /fr/contact.html
     * 若无法提取，默认返回 'en'
     */
    function getCurrentLang() {
        const path = window.location.pathname;
        const match = path.match(/^\/([a-z]{2})\//);
        if (match && ['en', 'fr', 'es', 'ar'].includes(match[1])) {
            return match[1];
        }
        return 'en'; // 默认语言
    }

    const lang = getCurrentLang();

    // 渲染导航下拉菜单
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            // 构建带语言前缀的产品页链接
            html += `<a href="/${lang}/products.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }
})();