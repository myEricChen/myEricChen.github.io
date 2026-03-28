(function() {
    // 等待数据加载
    if (!window.ludaData) {
        console.error('Data not found! Make sure /data/data.js is loaded.');
        return;
    }

    const { categories, devices } = window.ludaData;

    // 1. 渲染下拉菜单
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            html += `<a href="/ar/products.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }

    // 2. 获取 URL 参数 id
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        showError('لم يتم تحديد أي منتج. يرجى اختيار منتج من سلسلة المعدات.');
        return;
    }

    // 3. 查找设备
    const product = devices.find(d => d.id === productId);
    if (!product) {
        showError(`المنتج بالمعرف "${productId}" غير موجود.`);
        return;
    }

    // 4. 查找所属分类（用于面包屑）
    const category = categories.find(c => c.id === product.category);
    
    // 5. 更新面包屑
    document.getElementById('breadcrumb-category').textContent = category ? category.name : product.category;
    document.getElementById('breadcrumb-category').href = `/ar/products.html?category=${category ? category.id : ''}`;
    document.getElementById('breadcrumb-product').textContent = product.name;

    // 6. 渲染产品详情
    renderProductDetail(product);

    function renderProductDetail(product) {
        const container = document.getElementById('product-detail-container');
        
        // 处理标准列表（新增）
        const standardsHtml = product.standards && product.standards.length > 0 ? `
            <div class="product-standards">
                <h3>المعايير المطبقة</h3>
                <ul class="standards-list">
                    ${product.standards.map(std => `<li>${std}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        // ✅ 新增：处理定制化选项
        const customizationHtml = product.customized && product.customized.length > 0 ? `
            <div class="product-customization">
                <h3>خيارات التخصيص</h3>
                <ul class="features-list">
                    ${product.customized.map(opt => `<li>${opt}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        // 处理特点列表（如果为空则隐藏该部分）
        const featuresHtml = product.features && product.features.length > 0 ? `
            <div class="product-features">
                <h3>الميزات الرئيسية</h3>
                <ul class="features-list">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        // 处理规格表格
        const specsHtml = product.specifications && product.specifications.length > 0 ? `
            <div class="product-specs">
                <h3>المواصفات الفنية</h3>
                <table class="specs-table">
                    ${product.specifications.map(spec => `
                        <tr>
                            <td>${spec.label}</td>
                            <td>${spec.value}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
        ` : '';

        // 处理徽章
        let badgesHtml = '';
        if (product.isNew) badgesHtml += '<span class="badge badge-new"><i class="fas fa-star"></i> جديد</span>';
        if (product.hasVideo) badgesHtml += '<span class="badge badge-video"><i class="fas fa-video"></i> فيديو متاح</span>';
        if (product.hasManual) badgesHtml += '<span class="badge badge-manual"><i class="fas fa-file-pdf"></i> دليل</span>';

        // 主图使用 thumbnail 字段
        const thumbnailPath = product.thumbnail || '';

        const html = `
            <div class="product-header">
                <div class="product-gallery">
                    <div class="product-main-image">
                        ${thumbnailPath ? `<img src="${thumbnailPath}" alt="${product.name}" id="main-image">` : '<i class="fas fa-cogs" style="font-size: 10rem; display: flex; justify-content: center; align-items: center; height: 300px;"></i>'}
                    </div>
                </div>
                <div class="product-info-header">
                    <h1 class="product-title">${product.name}</h1>
                    <div class="product-model">الطراز: ${product.model}</div>
                    ${badgesHtml ? `<div class="product-badges">${badgesHtml}</div>` : ''}
                    <div class="product-description">${product.description}</div>
                </div>
            </div>
            ${standardsHtml}
             ${customizationHtml}
            ${featuresHtml}
            ${specsHtml}
        `;

        container.innerHTML = html;
    }

    function showError(message) {
        const container = document.getElementById('product-detail-container');
        container.innerHTML = `
            <div class="loading" style="color: #d71920;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                <p>${message}</p>
                <a href="/products.html" class="btn btn-primary" style="margin-top: 20px;">تصفح سلسلة المعدات</a>
            </div>
        `;
    }
})();