(function() {
    $('#tb-computer-box').click(function() {
        $('.tb-dg-box').hide();
        $('.tb-dg-box2').show();
    });
})(jQuery);

(function() {
    $('#tb-qr-coder-box').click(function() {
        $('.tb-dg-box2').hide();
        $('.tb-dg-box').show();
    });0
})(jQuery);

(function() {
    $('#qc-computer').click(function() {
        $('.tb-dg-box').hide();
        $('.tb-dg-box2').show();
    });
})(jQuery);

// (function() {
//     $('.tb-dg').find('i').click(function() {
//         var _id, num;
//         _id = $(this).attr('id');
//         num = _id.charAt(_id.length - 1);
//         $('tb-dg-box-'+num).show();
//     }, function() {
//         $(this).addClass('li-nav-hover');
//     });
// })(jQuery);