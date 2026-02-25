(function() {
    // 等待数据加载
    if (!window.ludaData) {
        console.error('Data not found! Make sure /data/data.js is loaded.');
        return;
    }

    const { categories, devices } = window.ludaData;

    // 1. 渲染下拉菜单（与主页相同，便于导航）
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            html += `<a href="index.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }

    // 2. 获取 URL 参数 category
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');

    // 如果未指定分类，默认显示第一个或提示？
    if (!categoryId) {
        // 可以选择显示全部设备，或跳转到第一个分类
        // 此处简单显示提示，建议默认显示第一个分类
        if (categories.length > 0) {
            window.location.href = `index.html?category=${categories[0].id}`;
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

    // 更新页面标题和描述
    document.getElementById('category-title').textContent = currentCategory.name;
    document.getElementById('category-description').textContent = currentCategory.description;
    document.getElementById('current-category-name').textContent = currentCategory.name;

    // 4. 过滤出属于该分类的设备（注意 devices 中的 category 是分类名称，需匹配）
    const categoryName = currentCategory.name; // 使用英文名称进行匹配
    const filteredDevices = devices.filter(dev => dev.category === categoryName);

    // 5. 渲染设备卡片
    const container = document.getElementById('products-container');
    if (!container) return;

    if (filteredDevices.length === 0) {
        container.innerHTML = `
            <div class="no-devices">
                <i class="fas fa-microscope"></i>
                <p>No devices currently listed in this series — contact us for custom solutions.</p>
            </div>
        `;
        return;
    }

    let html = '';
    filteredDevices.forEach(dev => {
        // 处理缩略图：使用 thumbnail 字段，若不存在则用占位图标
        const thumbnailHtml = dev.thumbnail 
            ? `<img src="${dev.thumbnail}" alt="${dev.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-cogs\'></i>';">`
            : `<i class="fas fa-cogs"></i>`;
        
        // 简短描述
        const shortDesc = dev.description.length > 120 
            ? dev.description.substring(0, 120) + '…' 
            : dev.description;

        html += `
            <a href="/product-detail/index.html?id=${dev.id}" class="product-card-link">
                <div class="product-card">
                    <div class="product-thumb">
                        ${thumbnailHtml}
                    </div>
                    <div class="product-info">
                        <span class="product-category-badge">${dev.category.replace('Luda ', '')}</span>
                        <h3 class="product-title">${dev.name}</h3>
                        <span class="product-model">${dev.model}</span>
                        <p class="product-desc">${shortDesc}</p>
                        <div class="product-meta">
                            ${dev.hasVideo ? '<span><i class="fas fa-video"></i> Video</span>' : ''}
                            ${dev.isNew ? '<span style="color:#b34b00;"><i class="fas fa-star"></i> New</span>' : ''}
                            <span><i class="fas fa-tag"></i> ${dev.id}</span>
                        </div>
                    </div>
                </div>
            </a>
        `;
    });

    container.innerHTML = html;
})();