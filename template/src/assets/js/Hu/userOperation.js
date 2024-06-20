document.addEventListener('DOMContentLoaded', function() {
    const updateButton = document.getElementById('updateButton');
    const workReport = document.getElementById('workReport');
    const localStorageKey = 'workReportContent'; // Key for localStorage

    // Load saved content from localStorage
    const savedContent = localStorage.getItem(localStorageKey);
    if (savedContent) {
        workReport.innerHTML = savedContent;
    }

    let isEditing = false; // Track whether we are in edit mode

    updateButton.addEventListener('click', function() {
        if (!isEditing) {
            // 用户第一次点击更新按钮，进入编辑模式
            let currentContent = Array.from(workReport.querySelectorAll('li')).map(li => li.textContent).join('\n');
            let textarea = document.createElement('textarea');
            textarea.classList.add('form-control', 'textarea-editor');
            textarea.style.height = "185px";
            textarea.value = currentContent;
            workReport.innerHTML = '';
            workReport.appendChild(textarea);

            // 更新按钮的文本为“确定”并更新编辑状态
            this.textContent = '确定';
            isEditing = true;
        } else {
            // 用户点击确定按钮，保存更改并退出编辑模式
            let updatedContent = document.querySelector('.textarea-editor').value.split('\n');
            workReport.innerHTML = '';
            updatedContent.forEach(content => {
                let newItem = document.createElement('li');
                newItem.innerHTML = `<strong>${content}</strong>`;
                workReport.appendChild(newItem);
            });

            // 保存更新后的内容到localStorage
            localStorage.setItem(localStorageKey, workReport.innerHTML);

            // 恢复按钮的文本为“更新”并退出编辑状态
            this.textContent = '更新';
            isEditing = false;
        }
    });
});
