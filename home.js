/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-25 10:52:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-04-20 10:28:06
 * @FilePath: \myEricChen.github.io\home.js
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
     * 假设 URL 格式为 /语言代码/...，例如 /en/index.html
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

    // 1. 渲染下拉菜单（分类列表）
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            // 构建带语言前缀的链接
            html += `<a href="/${lang}/products.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }

    // 2. 渲染产品分类卡片（首页产品系列）
    const container = document.getElementById('categories-container');
    if (container && categories.length) {
        let html = '';
        categories.forEach(cat => {
            html += `
                <a href="/${lang}/products.html?category=${cat.id}" class="category-card">
                    <img src="${cat.icon}" alt="${cat.name}" loading="lazy" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="category-icon" style="display: none;"><i class="fas fa-cogs"></i></div>
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                </a>
            `;
        });
        container.innerHTML = html;
    }

    // 3. Banner 轮播控制（无需修改，因为轮播逻辑不依赖路径）
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideCount = slides.length;

    function showSlide(index) {
        slides.forEach((s, i) => {
            s.classList.toggle('active', i === index);
        });
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    let interval = setInterval(() => {
        let next = (currentSlide + 1) % slideCount;
        showSlide(next);
    }, 5000);

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            clearInterval(interval);
            showSlide(idx);
            interval = setInterval(() => {
                let next = (currentSlide + 1) % slideCount;
                showSlide(next);
            }, 5000);
        });
    });

    showSlide(0);
})();