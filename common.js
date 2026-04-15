/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-03-07 14:16:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-04-15 15:23:34
 * @FilePath: \myEricChen.github.io\common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 公共功能：移动端下拉菜单处理
(function() {
    // 判断是否为触摸设备
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (!isTouchDevice) return; // 非触摸设备不处理

    // 获取所有下拉菜单元素
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (!dropbtn || !dropdownContent) return;

        // 点击按钮展开/关闭菜单
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止链接跳转
            e.stopPropagation();
            const isVisible = dropdownContent.style.display === 'block';
            dropdownContent.style.display = isVisible ? 'none' : 'block';
        });

        // 点击其他地方关闭当前菜单
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownContent.style.display = 'none';
            }
        });

        // 防止点击菜单内部时关闭
        dropdownContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
})();


/**
 * 更新语言切换器链接，使其指向当前页面的对应语言版本（保留查询参数和哈希）
 */
function updateLanguageSwitcher() {
    // 获取当前页面的完整路径（包含查询参数和哈希）
    const fullPath = window.location.pathname + window.location.search + window.location.hash;
    // 移除开头的语言前缀（例如 /fr/products.html?category=xxx -> /products.html?category=xxx）
    const pathWithoutLang = fullPath.replace(/^\/[a-z]{2}\//, '/');
    const langLinks = document.querySelectorAll('.lang-dropdown a');
    const langCodes = ['en', 'es', 'fr', 'ar'];

    langLinks.forEach((link, index) => {
        if (langCodes[index]) {
            link.href = `/${langCodes[index]}${pathWithoutLang}`;
        }
    });
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateLanguageSwitcher);
} else {
    updateLanguageSwitcher();
}

// ========== 搜索悬浮球功能（模态框大搜索框 + 语言选择器） ==========
(function() {
    // 获取当前页面语言（从 URL 路径）
    function getCurrentPageLang() {
        const path = window.location.pathname;
        const match = path.match(/^\/([a-z]{2})\//);
        if (match && ['en', 'fr', 'es', 'ar'].includes(match[1])) {
            return match[1];
        }
        return 'en';
    }

    // 语言列表及显示名称
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'ar', name: 'العربية' }
    ];

    // 创建遮罩层和搜索模态框（如果不存在）
    if (!document.querySelector('.search-modal-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'search-modal-overlay';
        overlay.style.display = 'none';
        
        // 生成语言下拉选项 HTML
        let langOptions = '';
        languages.forEach(lang => {
            langOptions += `<option value="${lang.code}">${lang.name}</option>`;
        });
        
        overlay.innerHTML = `
            <div class="search-modal-container">
                <div class="search-modal-box">
                    <div class="search-modal-header">
                        <h3>Search Products</h3>
                        <button class="search-modal-close">&times;</button>
                    </div>
                    <div class="search-modal-body">
                        <select id="search-modal-lang" class="search-lang-select">${langOptions}</select>
                        <input type="text" id="search-modal-input" placeholder="Search by name, model, standard or description..." autocomplete="off">
                        <button id="search-modal-submit"><i class="fas fa-search"></i> Search</button>
                    </div>
                    <div class="search-modal-footer">
                        <small>Click the button or press Enter to search</small>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // 获取元素
        const modalOverlay = overlay;
        const closeBtn = overlay.querySelector('.search-modal-close');
        const langSelect = overlay.querySelector('#search-modal-lang');
        const searchInput = overlay.querySelector('#search-modal-input');
        const searchSubmit = overlay.querySelector('#search-modal-submit');

        // 设置默认选中当前页面语言
        const currentLang = getCurrentPageLang();
        if (langSelect) {
            langSelect.value = currentLang;
        }

        // 打开模态框的函数
        function openSearchModal() {
            modalOverlay.style.display = 'flex';
            setTimeout(() => searchInput.focus(), 100);
        }

        // 关闭模态框的函数
        function closeSearchModal() {
            modalOverlay.style.display = 'none';
        }

        // 执行搜索跳转
        function performSearch() {
            const keyword = searchInput.value.trim();
            if (keyword === '') return;
            const selectedLang = langSelect.value;
            window.location.href = `/${selectedLang}/search.html?q=${encodeURIComponent(keyword)}`;
        }

        // 绑定事件
        closeBtn.addEventListener('click', closeSearchModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeSearchModal();
        });
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
        searchSubmit.addEventListener('click', performSearch);

        // 将打开函数挂载到 window
        window.openSearchModal = openSearchModal;
    }

    // 在右侧悬浮栏中添加搜索按钮（如果尚未添加）
    const floatingBar = document.querySelector('.floating-bar');
    if (floatingBar && !document.querySelector('.search-floating-btn')) {
        const searchBtn = document.createElement('a');
        searchBtn.href = 'javascript:void(0);';
        searchBtn.className = 'floating-item search-floating-btn';
        searchBtn.innerHTML = '<i class="fas fa-search"></i>';
        searchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.openSearchModal) window.openSearchModal();
        });
        floatingBar.appendChild(searchBtn);
    }
})();