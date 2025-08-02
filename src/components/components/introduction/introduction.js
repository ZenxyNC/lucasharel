import { useState, useEffect } from "react"
import LightRays from "./components/lightrays"
import TiltedCard from "./components/tiltedcard";
import Lanyard from "./components/lanyard";
import Lucas from '../../../resource/lucas.jpg'

export default function Introduction() {
  const [lightrays, setLightrays] = useState({
    isMobile: false,
    raysOrigin: "top-center",
    raysColor: "#F5F5F5",
    raysSpeed: 1.5,
    lightSpread:0.8,
    rayLength:1.2,
    followMouse:true,
    mouseInfluence:0.1,
    noiseAmount:0.1,
    distortion:0.05,
    className:"custom-rays"
  })

  //Listen to window resizing, then change the Light Rays values
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 999) {
        setLightrays({
          ...lightrays,
          isMobile: true,
          raysOrigin: "top-right",
          raysSpeed: 1.5, 
          lightSpread:0.8,
          rayLength:5,
          followMouse:true,
          mouseInfluence:0.1,
          noiseAmount:0.1,
          distortion:0.1,
        })
      } else {
        setLightrays({
          ...lightrays,
          isMobile: false,
          raysSpeed: 1.5,
          lightSpread:0.8,
          rayLength:1.2,
          followMouse:true,
          mouseInfluence:0.1,
          noiseAmount:0.1,
          distortion:0.05,
        })
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <LightRays
          raysOrigin={lightrays.raysOrigin}
          raysColor={lightrays.raysColor}
          raysSpeed={lightrays.raysSpeed}
          lightSpread={lightrays.lightSpread}
          rayLength={lightrays.rayLength}
          followMouse={lightrays.followMouse}
          mouseInfluence={lightrays.mouseInfluence}
          noiseAmount={lightrays.noiseAmount}
          distortion={lightrays.distortion}
          className={lightrays.className}
        />
      </div>
      <div id="introduction-maindiv">
        {lightrays.isMobile &&
          <div id="introduction-picture">
            <TiltedCard
              imageSrc={Lucas}
              altText="Lucas — Fullstack Developer"
              captionText="Lucas — Fullstack Developer"
              containerHeight="calc(100dvw - 60px)"
              containerWidth="calc(100dvw - 60px)"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={25}
              scaleOnHover={0.9}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Lucas Harel
                </p>
              }
            />
          </div>
        }
        {!lightrays.isMobile &&
          <div className="default-container" id="introduction-lanyard">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        }
        

        <div className="default-container" id="introduction-details">
          <h1>Lucas Harel</h1>
          <p>
            Hello. I’m Lucas Harel. I'm currently 17 Years old and I have a high interest in design and coding since I was 14.<br/>
            I’m an Intermediate Fullstack Developer and UI Designer with 3+ years of coding experience. I’m currently focusing on Modern Web Design, and improving my skills in Fullstack development along with intense learning and practices.
          </p>
          <button 
            id="introduction-getintouch"
            onClick={(e) => window.location.href = "#contact-maindiv"}
          >
            <div></div>
            Get In Touch
          </button>
        </div>
      </div>
    </>
  )
}