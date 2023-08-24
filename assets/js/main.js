// navbar
const
navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
        // console.log('clicked',navMenu.classList);
    });
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
        // console.log('clicked',navMenu.classList);
    });
}

// header profile pic
const shadowHeader = () => {
    const header = document.getElementById('header');
    // if scroll > 50vh, add shadow-header class
    this.scrollY >=50 ? 
        header.classList.add('shadow-header'):
        header.classList.remove('shadow-header');
}
window.addEventListener('scroll',shadowHeader);


// Show scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY > 350 ? scrollUp.classList.add('show-scroll'):
    scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);

// scroll sections active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach( (current) =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav_menu a[href*='+sectionId+']');
        if(scrollDown > sectionTop && scrollDown <= (sectionTop + sectionHeight)){
            sectionsClass?.classList?.add('active-link')
        }else{
            sectionsClass?.classList?.remove('active-link');
        }
    });
}
window.addEventListener('scroll',scrollActive);

//================= THEME ====================
const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// if user selected previous topic
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// obtain current theme
const getCurrentTheme = () => 
document.body.classList.contains(darkTheme) ? 'dark':'light';

const getCurrentIcon = () => 
document.body.classList.contains(iconTheme) ? 'ri-sun-line':'i-moon';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add':'remove'](iconTheme);
}

// activate / deactivate theme manually with theme button
themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
});

// scroll reveal for every section animation
const sr = new ScrollReveal({
    delay : 400,
    distance : '60px',
    duration : 2500,
    origin : 'top',
    reset : true // animation repeat
});
sr.reveal(`.home_perfil, .about_image, .contact_mail`, {origin : 'right'});
sr.reveal(`.home_name , .home_info,
         .about_container, .section-title-1, .about_info,
        .contact_social, .contact_data`, {origin : 'left'});
sr.reveal(`.services_card, .projects_card`, {interval: 100});

//================= CONTACT FORM ====================
window.onload = () =>{
    const mymail='0cdfb89a3f69c124c13a38fe85ef4730'
    document.getElementById('contact-form').action+=mymail;
    // console.log(document.getElementById('contact-form'));
}

const contactForm = document.getElementById('contact-form');
const sendMail = (e) => {
    e.preventDefault();
    const contactMessage = document.getElementById('contact-message');
    contactMessage.textContent = "Message sent successfully ✅";
    setTimeout(() => {
        contactMessage.textContent = "";
    }, 5000);
    contactForm.reset();
}
contactForm.addEventListener('submit', sendMail);

