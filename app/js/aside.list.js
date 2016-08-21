$(function(){
   $(".aside-layer").bind("click", function(){
       showOrHideAsideMenu();
   });
    $(".aside-fixed-nav .menu-btn").bind("click", function(){
       showOrHideAsideMenu();
   });
});

function showOrHideAsideMenu(){
    $(".aside-layer").toggleClass("aside-layer-show");
    $(".aside-menu").toggleClass("aside-menu-show");
}
