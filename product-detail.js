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
            html += `<a href="../products.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }

    // 2. 获取 URL 参数 id
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        showError('No product specified. Please select a product from the equipment series.');
        return;
    }

    // 3. 查找设备
    const product = devices.find(d => d.id === productId);
    if (!product) {
        showError(`Product with ID "${productId}" not found.`);
        return;
    }

    // 4. 查找所属分类（用于面包屑）
    const category = categories.find(c => c.name === product.category);
    
    // 5. 更新面包屑
    document.getElementById('breadcrumb-category').textContent = category ? category.name : product.category;
    document.getElementById('breadcrumb-category').href = `/products.html?category=${category ? category.id : ''}`;
    document.getElementById('breadcrumb-product').textContent = product.name;

    // 6. 渲染产品详情
    renderProductDetail(product);

    function renderProductDetail(product) {
        const container = document.getElementById('product-detail-container');
        
        // 处理特点列表（如果为空则隐藏该部分）
        const featuresHtml = product.features && product.features.length > 0 ? `
            <div class="product-features">
                <h3>Key Features</h3>
                <ul class="features-list">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        // 处理规格表格
        const specsHtml = product.specifications && product.specifications.length > 0 ? `
            <div class="product-specs">
                <h3>Technical Specifications</h3>
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
        if (product.isNew) badgesHtml += '<span class="badge badge-new"><i class="fas fa-star"></i> New</span>';
        if (product.hasVideo) badgesHtml += '<span class="badge badge-video"><i class="fas fa-video"></i> Video Available</span>';
        if (product.hasManual) badgesHtml += '<span class="badge badge-manual"><i class="fas fa-file-pdf"></i> Manual</span>';

        // 图片处理（主图和缩略图相同，可扩展多图）
        const imagePath = product.image || product.thumbnail || '';

        const html = `
            <div class="product-header">
                <div class="product-gallery">
                    <div class="product-main-image">
                        ${imagePath ? `<img src="${imagePath}" alt="${product.name}" id="main-image">` : '<i class="fas fa-cogs" style="font-size: 10rem; display: flex; justify-content: center; align-items: center; height: 300px;"></i>'}
                    </div>
                    ${product.thumbnail && product.thumbnail !== product.image ? `
                        <div class="product-thumbnail" onclick="document.getElementById('main-image').src='${product.thumbnail}'">
                            <img src="${product.thumbnail}" alt="thumbnail" style="width:100%; height:100%; object-fit:cover;">
                        </div>
                    ` : ''}
                </div>
                <div class="product-info-header">
                    <span class="product-category">${product.category.replace('Luda ', '')}</span>
                    <h1 class="product-title">${product.name}</h1>
                    <div class="product-model">Model: ${product.model}</div>
                    ${badgesHtml ? `<div class="product-badges">${badgesHtml}</div>` : ''}
                    <div class="product-description">${product.description}</div>
                </div>
            </div>
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
                <a href="/products.html" class="btn btn-primary" style="margin-top: 20px;">Browse Equipment Series</a>
            </div>
        `;
    }
})();