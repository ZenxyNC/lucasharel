import CodeHeading from "../components/codetext.cmp";
import ProjectBox from "../components/projectBox";


export default function Projects() {
  return (
    <>
      <CodeHeading className="mb-4 md:mb-3" >
        {`<Projects />`}
      </CodeHeading>
      <div className="
        flex flex-col gap-6 flex-wrap pb-6
        md:flex-row md:gap-7 md:pb-7
      ">
        <ProjectBox
          appicon="https://raw.githubusercontent.com/ZenxyNC/zendocs/refs/heads/main/public/resources/AppIcon/zendocs.png"
          appurl="https://zenxync.github.io/zendocs"
          appname="ZenDocs"
          appdescription="ZenDocs is an image of taking coding documentation to the next level. ZenDocs contains full documentation of all ZenApps."
        />
        <ProjectBox
          appicon="https://raw.githubusercontent.com/ZenxyNC/zendocs/refs/heads/main/public/resources/AppIcon/zenengine.png"
          appurl="https://zenxync.github.io/zenengine"
          appname="ZenEngine"
          appdescription="Making all same functions and feature for each project might be tiring and time wasting. Let ZenEngine fix that. Providing light, efficient, and powerful module."
        />

        <ProjectBox
          appicon="https://raw.githubusercontent.com/ZenxyNC/zendocs/refs/heads/main/public/resources/AppIcon/zenguard.png"
          appurl="https://zenxync.github.io/zenguard"
          appname="ZenGuard"
          appdescription="ZenGuard, ZenEcosystem main security protocol. Explore the latest security technology and secure your information seamlessly with ZenGuard. Being protected in seamless by ZenGuard."
        />

        <ProjectBox
          appicon="https://raw.githubusercontent.com/ZenxyNC/zendocs/refs/heads/main/public/resources/AppIcon/zenclock.png"
          appurl="https://zenxync.github.io/zenclock"
          appname="ZenClock"
          appdescription="Need a screen saver and clock at the same time? ZenClock is perfect. It is a clock app with multiple unique backgrounds you can choose. Find cool ui and features at once in ZenClock."
        />
      </div>
    </>
  )
}