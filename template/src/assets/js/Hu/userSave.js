document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('saveButton');

    // 恢复存储的表单数据
    document.querySelectorAll('.form-control').forEach(input => {
        const savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;  // 设置输入框的值为本地存储中的值
        }
    });

    saveButton.addEventListener('click', function() {
        // 保存所有表单数据到本地存储
        document.querySelectorAll('.form-control').forEach(input => {
            localStorage.setItem(input.id, input.value);
        });
        alert('信息已保存！');
    });
});
