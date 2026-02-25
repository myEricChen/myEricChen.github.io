// contact.js – 处理下拉菜单和留言表单提交
(function() {
    if (!window.ludaData) {
        console.error('Data not found! Make sure ../../data/data.js is loaded.');
        return;
    }

    const { categories } = window.ludaData;

    // 渲染导航下拉菜单
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown) {
        let html = '';
        categories.forEach(cat => {
            html += `<a href="../products/index.html?category=${cat.id}">${cat.name}</a>`;
        });
        dropdown.innerHTML = html;
    }

    // 留言表单提交处理 (使用 Formspree)
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // 重要: 将下面的 URL 替换为您在 Formspree 创建的真实 endpoint
            // 注册地址: https://formspree.io/ (免费账户每月可接收50封邮件)
            const formspreeEndpoint = 'https://formspree.io/f/your-form-id'; // 替换为真实ID

            const formData = new FormData(form);

            fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    statusDiv.innerHTML = '<span style="color: green;">✓ Thank you! Your message has been sent. We\'ll reply soon.</span>';
                } else {
                    response.json().then(data => {
                        if (data.errors) {
                            statusDiv.innerHTML = '<span style="color: red;">✗ Error: ' + data.errors.map(e => e.message).join(', ') + '</span>';
                        } else {
                            statusDiv.innerHTML = '<span style="color: red;">✗ Something went wrong. Please try again later.</span>';
                        }
                    }).catch(() => {
                        statusDiv.innerHTML = '<span style="color: red;">✗ Server error. Please try again later.</span>';
                    });
                }
            })
            .catch(error => {
                statusDiv.innerHTML = '<span style="color: red;">✗ Network error. Please check your connection and try again.</span>';
                console.error('Form submission error:', error);
            });
        });
    }
})();