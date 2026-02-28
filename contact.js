(function() {
    if (!window.ludaData) {
        console.error('Data not found! Make sure /data/data.js is loaded.');
        return;
    }

    const { categories } = window.ludaData;

    // 渲染导航下拉菜单
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            html += `<a href="/products.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }
})();