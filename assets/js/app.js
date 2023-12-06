$(document).ready(function() {
    
    $('.back_to_top').click(function(){
        $('html,body').animate({scrollTop:0},500)
        })
    $(window).on('load',function(){

        $('.preloader').fadeOut(1000)
    })
    
    $(window).scroll(function(){
        var scroller = $(this).scrollTop()
            if  (scroller > 200) {
                 /*console.log("250 Px Crossed")
                /*--check by inspect-console for 250 px crossing or not--*/
           
             $('.navbar').addClass('bg_color')
             $('.back_to_top').fadeIn(500)
             }else{
             $('.navbar').removeClass('bg_color')
             $('.back_to_top').fadeOut(500)
             }
    })

//For counterup plugin----------------------------------start
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
//For counterup plugin-----------------------------------End

})

//js-plugin for image-------------------------------------------------------------------------------------------------------
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
//js-pling for video
new VenoBox({
    selector: '.my-video-links',
});


//js-plugin for COUNTDOWN taken by Abdullah-mentor
(() => {
    // Specify the deadline date
    const deadlineDate = new Date('December 31, 2023 23:59:59').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
    
})();

// CommonJS
var mixer = mixitup('.mixitup');

// wow JS
new WOW().init(); 

// swiper JS
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 2,
      spaceBetween: 24,
      loop: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

});