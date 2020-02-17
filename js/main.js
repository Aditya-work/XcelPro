
$(document).ready(function(){
    $(".burger").click(function(){
      $("ul").toggleClass("nav-active");
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
        $("header").css("background" , "linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))");
      }
  
      else{
        $("header").css("background" , "transparent");  	
      }
    })
    $(".sidebarBtn").click(function(){
      $(".sidebar").toggleClass("active");
      $(".sidebarBtn").toggleClass("toggle");
    });
  });
    
