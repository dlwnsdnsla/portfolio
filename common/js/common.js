
$(function(){
 
//gnb
$(".gnb>li").on("mouseover focus",function(){
 $(this).find(".sub").fadeIn(200); 
 $(".gnb_back").css("display","block");    
 $(this).find(".m_g").css("display","block"); 
    
});
    
$(".gnb>li").on("mouseleave blur",function(){
 $(this).find(".sub").stop().fadeOut(200);
 $(".gnb_back").css("display","none");    
 $(this).find(".m_g").css("display","none");    
});    
    
   
  
    
 
//search
 $(".search_icon").on("click",function(){
  $(".search_w").slideToggle(200);
 }); 	
	
 
    
    
    
// left_menu
$(".ic_menu").on("click",function(){
 $(".left_menu").stop().animate({marginLeft:"300px"},300);
 $(".black_back").css("display","block");
});
$(".close").on("click",function(){
 $(".left_menu").stop().animate({marginLeft:"0px"},300);
 $(".black_back").css("display","none")
});    
        
$(".gnb2>li").on("mouseover focus",function(){
 $(this).find(".subm").stop().slideDown();
});
$(".gnb2>li").on("mouseleave blur",function(){
 $(this).find(".subm").stop().slideUp();
});    

	
// search_menu
$(".ic_menu2").on("click",function(){
 $(".search_menu").stop().animate({marginRight:"300px"},400);
 $(".black_back").css("display","block");
});
$(".close2").on("click",function(){
 $(".search_menu").stop().animate({marginRight:"0px"},400);
 $(".black_back").css("display","none");
});    

// cart_menu
$(".ic_menu3").on("click",function(){
 $(".cart_menu").stop().animate({marginRight:"300px"},400);
 $(".black_back").css("display","block");	
});
$(".close3").on("click",function(){
 $(".cart_menu").stop().animate({marginRight:"0px"},400);
 $(".black_back").css("display","none");	
});    	
	
    
        
}); //function end



