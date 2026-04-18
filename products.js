(function() {
    // 等待数据加载
    if (!window.ludaData) {
        console.error('Data not found! Make sure /data/data.js is loaded.');
        return;
    }

    const { categories, devices } = window.ludaData;

    /**
     * 从当前页面 URL 中提取语言代码（如 'en', 'fr', 'es', 'ar'）
     * 假设 URL 格式为 /语言代码/...，例如 /en/products.html
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

    // 多语言无设备提示
    const noDeviceMessages = {
        en: 'No devices currently listed in this series — contact us for custom solutions.',
        fr: 'Aucun équipement répertorié dans cette série pour le moment — contactez-nous pour des solutions sur mesure.',
        es: 'No hay equipos listados en esta serie actualmente — contáctenos para soluciones personalizadas.',
        ar: 'لا توجد معدات مدرجة في هذه السلسلة حاليًا — تواصل معنا للحصول على حلول مخصصة.'
    };

    // 1. 渲染下拉菜单（与主页相同，便于导航）
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            html += `<a href="/${lang}/products.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }

    // 2. 获取 URL 参数 category
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');

    // 如果未指定分类，默认显示第一个或提示？
    if (!categoryId) {
        if (categories.length > 0) {
            window.location.href = `/${lang}/products.html?category=${categories[0].id}`;
            return;
        } else {
            document.getElementById('category-title').textContent = 'No categories found';
            return;
        }
    }

    // 3. 查找当前分类信息
    const currentCategory = categories.find(c => c.id === categoryId);
    if (!currentCategory) {
        document.getElementById('category-title').textContent = 'Category not found';
        document.getElementById('category-description').textContent = 'Please select a valid category from the menu.';
        return;
    }

    
    // 设置 meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentCategory.description || 'Browse our construction materials testing equipment series.');
    // 更新页面标题和描述
    document.getElementById('category-title').textContent = currentCategory.name;
    document.getElementById('category-description').textContent = currentCategory.description;
    document.getElementById('current-category-name').textContent = currentCategory.name;


    // ========== 新增：面包屑结构化数据 ==========
    function addBreadcrumbSchema(category) {
        // 移除已有的同类型脚本（避免重复）
        const existingScript = document.querySelector('script[type="application/ld+json"].breadcrumb');
        if (existingScript) existingScript.remove();

        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": `https://www.ludatest.com/${lang}/index.html`
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": category.name,
                    "item": window.location.href
                }
            ]
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.className = 'breadcrumb';
        script.textContent = JSON.stringify(breadcrumbSchema);
        document.head.appendChild(script);
    }
    addBreadcrumbSchema(currentCategory);

    // 4. 过滤出属于该分类的设备
    const currentcategoryId = currentCategory.id;
    const filteredDevices = devices.filter(dev => dev.category === currentcategoryId);

    // 5. 渲染设备卡片
    const container = document.getElementById('products-container');
    if (!container) return;

    if (filteredDevices.length === 0) {
        container.innerHTML = `
            <div class="no-devices">
                <i class="fas fa-microscope"></i>
                <p>${noDeviceMessages[lang]}</p>
            </div>
        `;
        return;
    }

    let html = '';
    filteredDevices.forEach(dev => {
        // 处理缩略图
        const thumbnailHtml = dev.thumbnail 
            ? `<img src="${dev.thumbnail}" alt="${dev.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-cogs\'></i>';">`
            : `<i class="fas fa-cogs"></i>`;
        
        // 简短描述
        const shortDesc = dev.description.length > 120 
            ? dev.description.substring(0, 120) + '…' 
            : dev.description;

        // 处理标准显示
        let standardsHtml = '';
        if (dev.standards && dev.standards.length > 0) {
            const displayCount = 2;
            const displayStandards = dev.standards.slice(0, displayCount);
            const remainingCount = dev.standards.length - displayCount;
            const badgeHtml = displayStandards.map(std => 
                `<span class="standard-badge">${std}</span>`
            ).join('');
            const remainingHtml = remainingCount > 0 
                ? `<span class="standard-badge remaining">+${remainingCount}</span>` 
                : '';
            standardsHtml = `<div class="product-standards">${badgeHtml}${remainingHtml}</div>`;
        }

        html += `
            <a href="/${lang}/product-detail.html?id=${dev.id}" class="product-card-link">
                <div class="product-card">
                    <div class="product-thumb">
                        ${thumbnailHtml}
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${dev.name}${dev.suffixName ? ' (' + dev.suffixName + ')' : ''}</h3>
                        <span class="product-model">${dev.model}</span>
                        <p class="product-desc">${shortDesc}</p>
                        <div class="product-meta">
                            ${dev.hasVideo ? '<span><i class="fas fa-video"></i> Video</span>' : ''}
                            ${dev.isNew ? '<span style="color:#b34b00;"><i class="fas fa-star"></i> New</span>' : ''}
                            ${standardsHtml}
                        </div>
                    </div>
                </div>
            </a>
        `;
    });

    container.innerHTML = html;
})();