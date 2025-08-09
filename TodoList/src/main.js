import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

var menuIcon = document.querySelector('.menu-icon');
var closeLogo = document.querySelector('.close-logo');

var headerTL = gsap.timeline();

gsap.from("#header h1, .menu-icon", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    stagger: 0.4,
})

headerTL.to(".menu-icon", {
    opacity: 0,
})

headerTL.to(".full-header", {
    right: "0",
    opacity: 1,
})

headerTL.from(".full-header h2",{
    x: 200,
    // y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(2)"
})

headerTL.pause();

menuIcon.addEventListener("click", () => {
    headerTL.play();
})

closeLogo.addEventListener("click", () => {
    headerTL.reverse();
    
})


gsap.registerPlugin(SplitText) 


let HomeHeadline = SplitText.create(".home-text", {
    type: "words",
    wordsClass: "word++"
});


gsap.from("#Home .word5", {
    y: -200,
    delay: 0.5,
    duration: 0.7,
    opacity: 0,
    stagger: 0.3,
})
gsap.from("#Home .word7", {
    x: -400,
    delay: 1,
    duration: 0.7,
    opacity: 0,
    stagger: 0.3,
})



})
