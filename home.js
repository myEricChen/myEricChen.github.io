(function() {
    if (!window.ludaData) {
        console.error('Data not found! Make sure /data/data.js is loaded.');
        return;
    }

    const { categories } = window.ludaData;

    // 1. 渲染下拉菜单
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            // 链接到产品页并传递分类ID，产品页需解析参数
            html += `<a href="/products/index.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }

    // 2. 渲染产品分类卡片（带缩略图）
    const container = document.getElementById('categories-container');
    if (container && categories.length) {
        let html = '';
        categories.forEach(cat => {
            // 使用 icon 字段作为图片源，若图片加载失败则显示默认图标
            html += `
                <a href="/products/index.html?category=${cat.id}" class="category-card">
                    <img src="${cat.icon}" alt="${cat.name}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="category-icon" style="display: none;"><i class="fas fa-cogs"></i></div>
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                </a>
            `;
        });
        container.innerHTML = html;
    }

    // 3. Banner 轮播控制
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

    // 自动轮播
    let interval = setInterval(() => {
        let next = (currentSlide + 1) % slideCount;
        showSlide(next);
    }, 5000);

    // 点击点切换
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

    // 初始化第一张
    showSlide(0);
})();