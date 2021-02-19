$(document).ready(function(){

  
  $('.burger').click(function(){
		$(this).toggleClass('open');
	});
  
  
  $(".mobileBurger").on("click", function(){
		$(this).toggleClass('open');											
					$(".menu__list").slideToggle();												
	})
  
  
  
  
  

  
const gallerySlider = new Swiper('.gallery-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  autoplay: true,
  
  breakpoints: {
    280: {
      slidesPerView: 1,
  
    },
    
    576: {
      slidesPerView: 2,
  
    },
    
    768: {
      slidesPerView: 3,
     
    },
    
    1200: {
     slidesPerView: 4,
     spaceBetween: 20,
  },
  
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

	
		 pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
    
    },
  
  

});

AOS.init({
    enable: "phone",
});

$(".statistics-block__number").each(function() {
  $(this).attr("Counter", 0).animate({
    
    Counter:$(this).text()
  }, {
    duration: 8000,
    easing: 'swing',
    step: function(now){
      $(this).text(Math.ceil(now));
    }
  });
  
});




let $btnTop = $(".btn-top")
$(window).on("scroll", function(){
	
if($(window).scrollTop() >= 20){
	
	
	
	$btnTop.fadeIn();
}else {
	
	$btnTop.fadeOut();
}	
	
});

$btnTop.on("click", function(){
	
	$("html,body").animate({scrollTop:0}, 1500)
	
	
});


const burger = document.querySelector(".burger");
const fadeBlock = document.querySelector(".fade-block");
const modal = document.getElementById("modal");
const btnClose = document.querySelector("[data-modal-close]");
const inputModal = document.querySelector(".basic-slide");
/*const mobileBurger = document.querySelector(".mobileBurger");
const menuList =document.querySelector(".menu__list");*/

 burger.addEventListener("click", function() {
    
   fadeBlock.classList.toggle("fade-block--visible");
   
 });
  
 /* mobileBurger.addEventListener("click", function(){
    menuList.classList.toggle("open");
  });*/
  
  

 btnClose.addEventListener("click", function() {
    modal.classList.remove("fade-block--visible");
    burger.classList.toggle("open");
	   inputModal.value = "";
  
 
 });
      
    modal.addEventListener("click", function(){
    modal.classList.remove("fade-block--visible");
    burger.classList.toggle("open");
    inputModal.value = "";
	
    
  });
    
    modal.querySelector(".modal-window").addEventListener("click", function(e){
	   e.stopPropagation();
	 
      
    });
  
  
   jQuery('.btn').click( function() {
   
      var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
    				
                    //form.find('.status').html('форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    
    });
	


  
});





    


