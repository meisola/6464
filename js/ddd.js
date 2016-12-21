$(document).ready(function(){

  $(".ic").click(function(){   /*漢堡選單*/
    if( $(".ic").hasClass("click") ){
      $(".ic").removeClass("click");
      $(".site-nav").slideUp();
    }else{
      $(".ic").addClass("click");
      $(".site-nav").slideDown();
      return false;
    }
  });
  $(".ic").mouseleave(function(){
    if( $(this).hasClass("click") ){
      $(".site-nav").slideDown();
      $(this).removeClass("click");
    }

  });


});
