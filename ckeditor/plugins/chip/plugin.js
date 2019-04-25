CKEDITOR.plugins.add('chip', {
    icons: 'chip',
    requires: 'widget',
    init: function (editor) {
        editor.widgets.add('chip', {
            button: 'chip',
            allowedContent: 'span(chip)[contenteditable,id]',
            template: '<span contenteditable="false" class="chip"></chip>',
            upcast: function (element) {
                return element.name == 'span' && element.hasClass('chip');
            }
        });
        editor.ui.addButton('Chip', {
            label: 'Chip',
            command: 'insertChip',
            toolbar: 'Chip'
        });
    }
})
