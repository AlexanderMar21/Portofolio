// Display the Current Year on website
const publishYear = "2020"; // year of website creation
const currentYear = document.getElementById("current-year");
const year = new Date().getFullYear();
// year-stamp
if ( publishYear == year)
    currentYear.innerText = year ;
else
    currentYear.innerText =publishYear + " - " + year ;

const toggleButton = document.getElementById("hamBurger");
const navItems = document.querySelector("#nav-ul");
const navLinks = document.querySelectorAll(".nav-link");
const personalStatementView = document.querySelector("#auto-typing");
const topMenuButton = document.querySelector("#top-arrow");


// Array of typed words
const personalStatements = ["Full Stack Developer" , "Hobbyist Photographer" , "Designer" , "Thirsty Traveller"];


// Transparent NavBar Toggle

const navabar = document.querySelector("#navbar");
let scrolled = false;

// Resize window
var client_w = document.documentElement.clientWidth;
var client_h = document.documentElement.clientHeight;
if ( client_w < 550 && client_h < 750 ){
    navabar.classList.remove("transparent");
}else {
    // change nav-bar from transparent to visible background on first scroll
    window.onscroll = function(){
        if (window.pageYOffset > 90){
            navabar.classList.remove("transparent");
        }else {
            navabar.classList.add("transparent");
        }
    }

}

// Move button on  window resize
window.onresize = () => {
    client_w = document.documentElement.clientWidth;
    if ( client_w < 940 ) {
        topMenuButton.classList.add("top-arrow-mobile")
    }else
        topMenuButton.classList.remove("top-arrow-mobile")
}

$(window).scroll(function () {
    let widnowTopOffset = $(this).scrollTop();
    client_w = document.documentElement.clientWidth;
    // Show/hide button for go to top
    if  (widnowTopOffset <= 600 ){
        topMenuButton.style.display = "none";
    } else {
        topMenuButton.style.display = "block";
    }
    // hightlight links on scroll

    $('.nav-link').each(function (event) {
        if  ( widnowTopOffset >= $($(this).attr('href')).offset().top - 170) {
            $('.nav-link').parent().not(this).removeClass('active');
            $(this).parent().addClass('active');
        }else if (widnowTopOffset < $($(this).attr('href')).offset().top - 190) {
            $(this).parent().removeClass('active');
        }
    });

});

// auto typing text one
setTimeout(() => {
    var typed = new Typed("#auto-typing" , {
        strings: personalStatements ,
        typeSpeed : 140 ,
        cursorChar: '_',
        backSpeed : 80 ,
        loop : true
    });
}, 3800);


// nav-bar hamburegr menu
toggleButton.addEventListener('click' ,  ()=> {
    navItems.classList.toggle("show");
    toggleButton.classList.toggle("toggle");
})


// close dropdown menu when link is clicked or outside window (mobile- tablet version)

// outside menu
$(document).on("click", function(e){
    if(
      $(e.target).closest("#nav-ul").length == 0 &&
      $("#nav-ul").hasClass("show") &&
      $(e.target).closest("#hamBurger").length == 0
    ){
      $('#nav-ul').toggleClass('show');
      $('#hamBurger').toggleClass('toggle');
    }
  });

// on links
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', ()=> {
        setTimeout(() => {
           navItems.classList.toggle("show");
           toggleButton.classList.toggle("toggle");
        }, 100);
    });
}