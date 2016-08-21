$(function(){
   $("body").scrollspy();
   $('body').on('activate.bs.scrollspy', function () {
      alert("hehe");
   })
});
