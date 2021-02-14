// ===== NAVBAR ===== //
$(window).scroll(function() {
  
 let position    =   $(this).scrollTop();
    if (position >= 100) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  
});


// ===== HAMBURGER BUTTON ===== //
$(document).ready(function() {
  
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  })
    
}); 

// ===== CONTACT FORM ====== //

function toggleColor() {
   var element = document.getElementById("contact-form");
   element.classList.toggle("highlight");
}