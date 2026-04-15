(function() {
    // 获取当前语言（用于链接和翻译）
    function getCurrentLang() {
        const path = window.location.pathname;
        const match = path.match(/^\/([a-z]{2})\//);
        if (match && ['en', 'fr', 'es', 'ar'].includes(match[1])) {
            return match[1];
        }
        return 'en';
    }
    const lang = getCurrentLang();

    // 多语言文本映射
    const translations = {
        en: {
            searchTitle: 'Search Results',
            queryPrefix: 'Showing results for: "',
            querySuffix: '"',
            emptyKeyword: 'Please enter a keyword to search.',
            noResultsPrefix: 'No products found matching "',
            noResultsSuffix: '".',
            tryDifferent: 'Try different keywords or browse our',
            productSeriesLink: 'product series',
            loading: 'Loading...'
        },
        es: {
            searchTitle: 'Resultados de búsqueda',
            queryPrefix: 'Mostrando resultados para: "',
            querySuffix: '"',
            emptyKeyword: 'Por favor, introduzca una palabra clave para buscar.',
            noResultsPrefix: 'No se encontraron productos que coincidan con "',
            noResultsSuffix: '".',
            tryDifferent: 'Pruebe con diferentes palabras clave o explore nuestra',
            productSeriesLink: 'serie de productos',
            loading: 'Cargando...'
        },
        fr: {
            searchTitle: 'Résultats de recherche',
            queryPrefix: 'Affichage des résultats pour : "',
            querySuffix: '"',
            emptyKeyword: 'Veuillez saisir un mot-clé pour rechercher.',
            noResultsPrefix: 'Aucun produit trouvé correspondant à "',
            noResultsSuffix: '".',
            tryDifferent: 'Essayez différents mots-clés ou parcourez notre',
            productSeriesLink: 'série de produits',
            loading: 'Chargement...'
        },
        ar: {
            searchTitle: 'نتائج البحث',
            queryPrefix: 'عرض النتائج لـ: "',
            querySuffix: '"',
            emptyKeyword: 'يرجى إدخال كلمة للبحث.',
            noResultsPrefix: 'لم يتم العثور على منتجات تطابق "',
            noResultsSuffix: '".',
            tryDifferent: 'جرب كلمات مختلفة أو تصفح',
            productSeriesLink: 'سلسلة المنتجات',
            loading: 'جاري التحميل...'
        }
    };

    const t = translations[lang] || translations.en;

    // 更新页面标题和标题栏
    document.title = `${t.searchTitle} - Luda Instruments`;
    const searchHeader = document.querySelector('.search-results-header h1');
    if (searchHeader) searchHeader.textContent = t.searchTitle;

    // 渲染下拉菜单（设备系列）
    if (window.ludaData && window.ludaData.categories) {
        const dropdownMenu = document.getElementById('dropdown-menu');
        if (dropdownMenu) {
            let html = '';
            window.ludaData.categories.forEach(cat => {
                html += `<a href="/${lang}/products.html?category=${cat.id}">${cat.name}</a>`;
            });
            dropdownMenu.innerHTML = html;
        }
    }

    if (!window.ludaData || !window.ludaData.devices) {
        console.error('Data not found!');
        return;
    }
    const { devices } = window.ludaData;

    // 获取 URL 参数 q
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q') || '';
    const queryInfo = document.getElementById('search-query-info');
    if (keyword) {
        queryInfo.innerText = `${t.queryPrefix}${escapeHtml(keyword)}${t.querySuffix}`;
    } else {
        queryInfo.innerText = t.emptyKeyword;
    }

    // 搜索并计算匹配权重（不区分大小写）
    function searchAndSort(keyword, devices) {
        if (!keyword.trim()) return [];
        const kw = keyword.trim().toLowerCase();
        const results = [];
        devices.forEach(dev => {
            let weight = 0;
            const matchModel = dev.model && dev.model.toLowerCase().includes(kw);
            const matchName = dev.name.toLowerCase().includes(kw);
            const matchStandard = dev.standards && dev.standards.some(std => std.toLowerCase().includes(kw));
            const matchDesc = dev.description && dev.description.toLowerCase().includes(kw);
            
            if (matchModel) weight = 4;
            else if (matchName) weight = 3;
            else if (matchStandard) weight = 2;
            else if (matchDesc) weight = 1;
            else return;
            
            results.push({ dev, weight });
        });
        results.sort((a, b) => b.weight - a.weight);
        return results.map(item => item.dev);
    }

    const sortedResults = searchAndSort(keyword, devices);
    const container = document.getElementById('search-results-container');

    if (!sortedResults.length) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>${t.noResultsPrefix}${escapeHtml(keyword)}${t.noResultsSuffix}</p>
                <p>${t.tryDifferent} <a href="/${lang}/products.html">${t.productSeriesLink}</a>.</p>
            </div>
        `;
        return;
    }

    // 渲染卡片
    let html = '';
    sortedResults.forEach(dev => {
        const thumbnailHtml = dev.thumbnail 
            ? `<img src="${dev.thumbnail}" alt="${dev.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-cogs\'></i>';">`
            : `<i class="fas fa-cogs"></i>`;
        const shortDesc = dev.description.length > 120 ? dev.description.substring(0, 120) + '…' : dev.description;

        let standardsHtml = '';
        if (dev.standards && dev.standards.length > 0) {
            const displayCount = 2;
            const displayStandards = dev.standards.slice(0, displayCount);
            const remainingCount = dev.standards.length - displayCount;
            const badgeHtml = displayStandards.map(std => `<span class="standard-badge">${escapeHtml(std)}</span>`).join('');
            const remainingHtml = remainingCount > 0 ? `<span class="standard-badge remaining">+${remainingCount}</span>` : '';
            standardsHtml = `<div class="product-standards">${badgeHtml}${remainingHtml}</div>`;
        }

        html += `
            <a href="/${lang}/product-detail.html?id=${dev.id}" class="product-card-link">
                <div class="product-card">
                    <div class="product-thumb">
                        ${thumbnailHtml}
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${escapeHtml(dev.name)}${dev.suffixName ? ' (' + escapeHtml(dev.suffixName) + ')' : ''}</h3>
                        <span class="product-model">${escapeHtml(dev.model)}</span>
                        <p class="product-desc">${escapeHtml(shortDesc)}</p>
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

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
})();