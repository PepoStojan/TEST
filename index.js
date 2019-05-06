$(function () {
    
AOS.init();
   

// Navbar color-change
$(document).ready(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 140) { 
        $(".navbar-IndexHtml").css("background-color", "#f8f8f8" );
        $(".nav-link").css("color", "black" ,  );
        $("#logo-img").hide();
        $("#logo-img2").show();
        $(" #HireUs-btn ").css("color", "white" , 'transition' , '0.5s' )
       
      } else {
        $(".navbar-IndexHtml").css("background-color", "transparent"); 
        $(".nav-link").css("color", "white" , 'transition' , '0.5s' )
        
        $("#logo-img").show();
        $("#logo-img2").hide();
      }
    });
  });


  // Home page IPAD IMAGE SCROLLING

  $('#down').click(function () {
    $('.inner-img img').animate({
    
        top: '-=200px'
    }, 'slow');
    $('.ipad').css({'overflow' :'hidden'})
});

$('#up').click(function () {
    $('.inner-img img').animate({
        top: '+=200px'
        
    }, 'slow');
    $('.ipad').css({'overflow' : 'hidden'})
});

       // SERVICE-page CHANGE HTML CONTENT

    document.getElementById('coding').onclick = function(event) {
      event.preventDefault();
      document.getElementById('service-inner').innerHTML = ` 
                <ul data-aos="zoom-in" id='service-lista' >
                  <li>Web Design</li>
                  <li>Mobile & App Design</li>
                  <li>E-Commerce</li>
                  <li>CMS (WordPress & Prestashop)</li>
                  <li>UI • UX Responsive</li>
                  <li>Templating</li>
                  <li>Creative Front-End</li>
                  <li> Back-End Development</li>
                </ul>`;
                $("#kaseta").attr('src', 'img/flopi.png');
               
    }
    document.getElementById('filming').onclick = function(event) {
      event.preventDefault();
      document.getElementById('service-inner').innerHTML = ` 
            <ul  data-aos="zoom-in">
                  <li>Lead Generation</li>
                  <li>Social Media Marketing</li>
                  <li>Search Engine Optimization</li>
                  <li>PPC and paid search
                  management</li>
                  <li>management Strategy</li>
                  <li>Display and Advertising Recapture Marketing</li>
                  <li>Creative Front-End</li>
                  <li>Growth Hacking</li>
                  <li>Side Project Marketing</li>
                  <li>Email Marketing</li>
                  <li>Email Marketing</li>
                  <li>Digital Event Amplification</li>
                  <li>Digital Marketing Trainings</li>
                </ul>`;
                $("#kaseta").attr('src', 'img/film.png');
                
    }
    document.getElementById('branding').onclick = function(event) {
      event.preventDefault();
      document.getElementById('service-inner').innerHTML = ` 
        <ul data-aos="zoom-in" id='service-lista' >
            <li>Art & Creative Direction,</li>
            <li>Brand Identity,</li>
            <li>Logo Design</li>
            <li>Graphic Guidelines,</li>
            <li>Illustration,</li>
            <li>Typography,</li>
            <li>Print,</li>
            <li>Strategy</li>
          </ul>`;
          $("#kaseta").attr('src', 'img/k7.png');
    }
    
// TOGLE MENu



     

})