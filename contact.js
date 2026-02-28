/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-25 10:48:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-02-28 16:16:39
 * @FilePath: \myEricChen.github.io\contact\contact.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// contact.js – 处理下拉菜单和留言表单提交
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