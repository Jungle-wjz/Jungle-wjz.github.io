$(function(){
   $(".aside-layer").bind("click", function(){
       hideAsideMenu();
   });
    $(".aside-fixed-nav .menu-btn").bind("click", function(){
       showAsideMenu();
   });
});

function showAsideMenu(){
    $(".aside-layer").addClass("aside-layer-show");
    $(".aside-menu").addClass("aside-menu-show");
}
function hideAsideMenu(){
    $(".aside-layer").removeClass("aside-layer-show");
    $(".aside-menu").removeClass("aside-menu-show");
}