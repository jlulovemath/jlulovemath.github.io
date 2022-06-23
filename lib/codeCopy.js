// �����һ������

$(function () {
    var $copyIcon = $('<i class="fa fa-copy code_copy" title="���ƴ���" aria-hidden="true"></i>');
    $('.code-area').prepend($copyIcon);
new ClipboardJS('.fa-copy', {
    target: function (trigger) {
        return trigger.nextElementSibling;
    }
});

});