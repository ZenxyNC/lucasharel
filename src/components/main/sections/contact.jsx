import { useEffect, useState } from "react";

import ContactButton from "../components/contactButton";
import DotGrid from "../components/dotGrid";

// Icons
import { MdMailOutline } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";

export default function Contact({ currentTheme = "light" }) {
  const [rootColors, setRootColors] = useState({
    bgColor: "#0F131A",
    baseColor: "#F5F5F5",
    activeColor: "#007AFF",
    borderColor: "rgba(245, 245, 245, 0.2)"
  });

  useEffect(() => {
    if (currentTheme === "dark") {
      console.log("Set to dark.")
      setRootColors({
        bgColor: "#F5F5F5",
        baseColor: "#0F131A",
        activeColor: "#007AFF",
        borderColor: "rgba(23, 28, 35, 0.6)"
      })
    } else {
      console.log("Set to light.")
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
        w-full aspect-square rounded-outerradius border border-border
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
             text-left font-[PlusJakarta] font-black text-[32px] z-10 absolute
            md:text-[52px] md:relative
          `}
          style={{
            color: rootColors.baseColor
          }}
          >
            Let's <br className="hidden md:block"/>Create <br/>Something <br className="hidden md:block"/>Creative
          </h1>
          <div className="
            pointer-events-auto
            w-full h-full grid grid-cols-1 gap-[16px] z-10 relative content-end
            md:w-[272px] md:h-max md:flex md:flex-col md:gap-[16px] md:z-10
          ">
            <ContactButton
              icon={<SiGithub size="28px" style={{ filter: `dropShadow(0px 0px 10px #F5F5F5)` }} color={rootColors.baseColor}/>}
              title="ZenxyNC"
              url="https://github.com/ZenxyNC"
              borderColor={rootColors.borderColor}
              bgColor={rootColors.bgColor}
              fontColor={rootColors.baseColor}
            />
            <ContactButton
              icon={<MdMailOutline size="28px" color={rootColors.baseColor}/>}
              title="lucasharel@gmail.com"
              url="mailto:lucasharel@gmail.com"
              borderColor={rootColors.borderColor}
              bgColor={rootColors.bgColor}
              fontColor={rootColors.baseColor}
            />
            <ContactButton
              icon={<CgFileDocument size="28px" color={rootColors.baseColor}/>}
              title="ZenDocs"
              url="https://zenxync.github.io/zendocs/search"
              borderColor={rootColors.borderColor}
              bgColor={rootColors.bgColor}
              fontColor={rootColors.baseColor}
            />
          </div>
        </div>

        <DotGrid
          dotSize={3}
          gap={18}
          baseColor={rootColors.baseColor}
          activeColor={rootColors.activeColor}
          proximity={160}
          speedTrigger={100}
          shockRadius={180}
          shockStrength={6}
          maxSpeed={6500}
          resistance={1000}
          returnDuration={2}
          className="p-3! rounded-innerradius opacity-[0.6]"
        />
      </div>
    </>
  )
}