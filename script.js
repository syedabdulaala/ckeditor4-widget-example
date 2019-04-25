function init() {
    CKEDITOR.inline('sample', getConfig());
}

function getConfig() {
    return {
        toolbar: [
            { name: 'a', items: ['Bold', 'Italic', 'Underline'] },
            { name: 'b', items: ['NumberedList', 'BulletedList'] },
            { name: 'c', items: ['Indent', 'Outdent', 'Chip'] },
        ],
        extraPlugins: 'chip',
    }
}

init();
