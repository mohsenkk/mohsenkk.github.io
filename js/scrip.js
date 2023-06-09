let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let secttions = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    secttions.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });



let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100)

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .concat form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

const contactForm = document.getElementById('contact-form'),
      contactFullName = document.getElementById('contact-full-name'),
      contactEmail = document.getElementById('contact-email'),
      contactMobileNumber = document.getElementById('contact-mobile-number'),
      contactEmailSubject = document.getElementById('contact-email-subject'),
      contactYourMassage = document.getElementById('contact-your-massage'),
      contactMassage = document.getElementById('contact-massage')

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactFullName.value === '' || contactEmail.value === '' || contactMobileNumber.value === '' ||
    contactEmailSubject.value === '' || contactYourMassage.value === ''){
        contactMassage.classList.remove('color-blue')
        contactMassage.classList.add('color-red')

        contactMassage.textContent = 'Write all the input fields!'
    }else{
        emailjs.sendForm('service_y0lrmhl', 'template_44r4a7f', '#contact-form', 'CCd6ZHReS_QlcAmC8')
        .then(() =>{
            contactMassage.classList.add('color-blue')
            contactMassage.textContent = 'Message sent.'
            setTimeout(() =>{
                contactMassage.textContent = ''
            }, 5000)
        })
    }
}
contactForm.addEventListener('submit', sendEmail)