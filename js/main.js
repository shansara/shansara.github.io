$(document).ready(function() {
    var $footerWrapperEl = $('#footer-wrapper');
    var footerPos = $footerWrapperEl.offset().top + $footerWrapperEl.outerHeight();
    if (footerPos < $(window).height()) {
        var bodymainHeight = $(window).height() - $('#bodymain').offset().top - 88;
        $('#bodymain').attr('style', 'min-height: '+bodymainHeight+'px !important');
    }
});
function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}