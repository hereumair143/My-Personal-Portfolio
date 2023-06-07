/*==========Toggle Icon Navbar==========*/
// let menuIcon = document.querySelector('#menu-icon');
let menuIcon = document.querySelector('.bx-menu');

let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
    //   menuIcon.classList.toggle('bx-menu');
     navbar.classList.toggle('active');
console.log("Clicked");

 };


/*=================scroll section active link==================*/

let sections = document.querySelectorAll('Section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height) {
            navlinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +']') .classList.add('active');
            });
        };

    });

    /*====================Sticky Navbar =================*/

       let header = document.querySelector('header');
       header.classList.toggle('sticky', window.scrollY > 100);

    /*Remove Toggle icon and navbar when click navbar when click navbar link (scroll )*/

    menuIcon.classList.remove('bx bx-menu');
    navbar.classList.remove('active');

};  


/*---------------------------scroll reveal-------------------------------*/

    ScrollReveal({ 
        
        distance : '80px',
        duration : 2000,
        delay : 200
     });

     ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
     
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin:'bottom'});
     ScrollReveal().reveal('.home-content, .about-img,', { origin:'left'});
     ScrollReveal().reveal('.home-content h1, .about-content,', { origin:'right'});

     

/*---------------------------scroll reveal-------------------------------*/
const typed = new Typed ('.multiple-text',{
strings : ['Frontend Developer', 'YouTuber','Blogger'],
typeSpeed :100,
backSpeed : 100,
backDelay : 1000,
loop : true
});