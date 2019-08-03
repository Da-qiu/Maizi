$(function () {
    $('.nav').singlePageNav({
        offset: 70
    });
    // 小屏幕点击导航关闭菜单
    $('.navbar-collapse a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    new WOW().init();
})