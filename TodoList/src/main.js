import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "lenis";


document.addEventListener("DOMContentLoaded", () => {

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
    });
    gsap.ticker.lagSmoothing(0);


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

gsap.utils.toArray("#aboutA").forEach((item) => {
    const img = item.querySelector(".about_image");
    const nameH1 = item.querySelector(".about_name h1");

    const splitH1 = SplitText.create(nameH1, {
        type: "chars",
        mask: "chars"
    })

    gsap.set(splitH1.chars, {
        y: "125%"
    });

    splitH1.chars.forEach((char, index) => {
        ScrollTrigger.create({
            trigger: item,
            start: `top+=${index * 25 - 250} top`,
            end: `top+=${index * 25 -100} top`,
            scrub: 1,
            animation: gsap.fromTo(
                char, {
                    y: "125%"
                },{
                    y: "0%",
                    ease: "none",
                }
            )
        })
    })

    ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        // markers: true,
        animation: gsap.fromTo(
            img, {
                clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)"
            }, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "none"
            }
        )
    })

    ScrollTrigger.create({
        trigger: item,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.5,
        // markers: true,
        animation: gsap.fromTo(
            img, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }, {
                clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
                ease: "none"
            }
        )
    })
})






})
