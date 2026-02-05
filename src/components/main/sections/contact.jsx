import { useEffect, useState } from "react";

import ContactButton from "../components/contactButton";
import DotGrid from "../components/dotGrid";

// Icons
import { MdMailOutline } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import Grainient from "../components/grainient";

export default function Contact({ currentTheme = "light" }) {
  const [rootColors, setRootColors] = useState({
    bgColor: "#0F131A",
    baseColor: "#F5F5F5",
    activeColor: "#007AFF",
    borderColor: "rgba(245, 245, 245, 0.2)"
  });

  useEffect(() => {
    if (currentTheme === "dark") {
      setRootColors({
        bgColor: "#F5F5F5",
        baseColor: "#0F131A",
        activeColor: "#007AFF",
        borderColor: "rgba(23, 28, 35, 0.6)"
      })
    } else {
      setRootColors({
        bgColor: "#0F131A",
        baseColor: "#F5F5F5",
        activeColor: "#007AFF",
        borderColor: "rgba(245, 245, 245, 0.2)"
      })
    }
  }, [currentTheme])

  return (
    <>
      <div id="get-in-touch" className={`
        w-full aspect-square rounded-outerradius overflow-hidden
        md:aspect-[unset] md:h-[480px] md:mb-[200px]
      `}
      style={{
        backgroundColor: rootColors.bgColor
      }}
      >
        <div id="content-wrapper" className="
          w-[calc(100%-2px)] h-[calc(100%-2px)] p-[24px_24px_24px_24px] absolute
          md:flex md:justify-evenly md:items-center md:gap-[16%]
        ">
          <h1 className={`
             text-left font-[PlusJakarta] font-black text-[#F5F5F5] text-[32px] z-10 absolute
            md:text-[52px] md:relative
          `}
          >
            Let's <br className="hidden md:block"/>Create <br/>Something <br className="hidden md:block"/>Creative
          </h1>
          <div className="
            pointer-events-auto
            w-full h-full grid grid-cols-1 gap-[16px] z-10 relative content-end
            md:w-[272px] md:h-max md:flex md:flex-col md:gap-[16px] md:z-10
          ">
            <ContactButton
              icon={<SiGithub size="28px" color="#F5F5F5"/>}
              title="ZenxyNC"
              url="https://github.com/ZenxyNC"
              borderColor={rootColors.borderColor}
              bgColor={rootColors.bgColor}
              fontColor={rootColors.baseColor}
            />
            <ContactButton
              icon={<MdMailOutline size="28px" color="#F5F5F5"/>}
              title="lucasharelw@gmail.com"
              url="mailto:lucasharelw@gmail.com"
              borderColor={rootColors.borderColor}
              bgColor={rootColors.bgColor}
              fontColor={rootColors.baseColor}
            />
            <ContactButton
              icon={<img src="https://raw.githubusercontent.com/ZenxyNC/zendocs/refs/heads/main/public/resources/AppIcon/zenapps.png" className="w-[28px] h-[28px] rounded-[4px]" alt="" />}
              title="ZenApps"
              url="https://zenxync.github.io/zenapps/"
              borderColor={rootColors.borderColor}
              bgColor={rootColors.bgColor}
              fontColor={rootColors.baseColor}
            />
          </div>
        </div>

        <Grainient
          color1="#FF9FFC"
          color2="#6945f7"
          color3="#B19EEF"
          timeSpeed={0.3}
          colorBalance={0.25}
          warpStrength={1}
          warpFrequency={10}
          warpSpeed={2}
          warpAmplitude={30}
          blendAngle={1}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={4}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={0.8}
          saturation={1}
          centerX={0.2}
          centerY={0.2}
          zoom={0.9}
        />
      </div>
    </>
  )
}