import gsap from 'gsap'

class Preloader {
    constructor(arguments= {}) {
this.backgroundColor = arguments.backgroundColor;
this.Preloader = document.getElementById {'Preloader'};

    }
}


gsap.to('#preloader', {
delay: 1,
duration: 0.5,
ease: 'power2.inOut',
opacity: 0,
y: '100%'
})




/*const preloader = document.getElementById('preloader');

setTimeout(() => {
preloader.classList.add('loaded');
}, 2000);
*/