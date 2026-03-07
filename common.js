/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-03-07 14:16:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-03-07 14:18:04
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