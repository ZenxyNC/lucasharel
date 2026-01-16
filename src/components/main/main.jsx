import { useState, useLayoutEffect, useRef } from "react";
import Antigravity from "../components/antigravity/antigravity"
import Picture from "./components/picture";
import SelfIntro from "./sections/selfintro";
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import { BsSun, BsMoon } from "react-icons/bs";
import Contact from "./sections/contact";


export default function Main() {
  const wrapper = useRef(null);
  const content = useRef(null);

  const [currentTheme, setCurrentTheme] = useState("light");

  function switchTheme() {
    if (currentTheme == "light") {
      setCurrentTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setCurrentTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1,
        effects: true,
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (target) => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    smoother.scrollTo(target, 1);
  };

  return (
    <>
      <div className="fixed z-0 w-svw h-svh">
        <Antigravity
          count={200}
          magnetRadius={80}
          ringRadius={12}
          waveSpeed={0.1}
          waveAmplitude={2}
          particleSize={2}
          lerpSpeed={1}
          color="#007aff"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={3}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={0.3}
        />
      </div>

      <div id="smooth-wrapper" ref={wrapper} className="pointer-events-none">
        <div 
          id="smooth-content" ref={content}
          className="
            w-dvw flex flex-col gap-[120px] max-w-[500px] p-8 absolute pointer-events-none
            md:w-100svw md:gap-[200px] md:max-w-none md:p-0
        ">
          <div id="introduction-wrapper" className="w-vw h-svh relative bg-transparent pointer-events-none">
            <div id="introduction" className="
              w-full h-max absolute left-[50%] top-[min(calc(100dvw-120px),28px)] translate-x-[-50%] flex flex-col gap-10
              md:w-[calc(64dvw-64px)] md:min-w-[740px] md:max-w-[1000px] md:h-[440px] md:flex-row-reverse md:gap-64 md:absolute md:top-[50%] md:translate-y-[-50%]
              lg:max-w-[1050px]
            ">
              <Picture />
              <SelfIntro />
              <div className="
              relative top-[-16px] pointer-events-auto flex gap-[16px]
              md:absolute md:top-[unset] md:bottom-[-24px] md:left-0 md:gap-[20px]
            ">
                <button className="
                  w-[180px] h-[44px] pt-1 pb-1 pl-4 pr-4 relative flex items-center justify-center bg-primary-transparent border border-border rounded-full backdrop-blur-sm font-[PlusJakarta] font-black text-[20px] shadow-[0px_0px_30px_-4px_var(--color-shadow)] cursor-pointer transition-all duration-400 ease-[cubic-bezier(.40,2.1,.41,.8)]
                  hover:scale-[1.1] hover:rotate-[-4deg]
                "
                  onClick={() => scrollToSection("#contact")}
                >
                  Get In Touch
                </button>
                <button className="
                  w-[44px] aspect-square relative flex items-center justify-center bg-primary-transparent border border-border rounded-full backdrop-blur-sm font-[PlusJakarta] font-black shadow-[0px_0px_30px_-4px_var(--color-shadow)] cursor-pointer transition-all duration-400 ease-[cubic-bezier(.40,2,.41,.8)
                  hover:scale-[1.2] hover:rotate-[-16deg]
                "
                  onClick={switchTheme}
                >
                  {currentTheme == "dark" ? <BsSun size="24px" /> : <BsMoon size="24px" />}
                </button>
              </div>
            </div>
          </div>

          <div id="about-me-wrapper" className="w-vw h-[max] relative  pointer-events-none">
            <div id="about-me" className="
              w-full h-[max] relative left-[50%] translate-x-[-50%] pointer-events-none
              md:w-[calc(64dvw-64px)] md:min-w-[740px] md:max-w-[1000px]
              lg:max-w-[1050px]
            ">
              <AboutMe />
            </div>
          </div>

          <div id="projects-wrapper" className="w-vw h-[max] relative pointer-events-none">
            <div id="projects" className="
              w-full h-max relative left-[50%] translate-x-[-50%] pointer-events-none
              md:w-[calc(64dvw-64px)] md:min-w-[740px] md:max-w-[1000px]
              lg:max-w-[1050px]
            ">
              <Projects />
            </div>
          </div>

          <div id="contact-wrapper" className="w-vw h-[max] relative pointer-events-none">
            <div id="contact" className="
              w-full h-max relative left-[50%] translate-x-[-50%] pointer-events-none
              md:w-[calc(64dvw-64px)] md:min-w-[740px] md:max-w-[1000px]
              lg:max-w-[1050px]
            ">
              <Contact
                currentTheme={currentTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}