import AboutBox from "../components/aboutBox";
import CodeHeading from "../components/codetext.cmp";
import { 
  SiHtml5, 
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiExpress,
  SiFigma,
  SiTailwindcss,
  SiGit
} from "react-icons/si";
import LogoLoop from "../components/logoLoop";


export default function AboutMe() {
  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5", href: "https://html.com" },
    { node: <SiCss3 />, title: "CSS3", href: "https://css3.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://javascript.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ]

  return (
    <>
      <CodeHeading className="mb-4 md:mb-3" >
        {`<AboutMe />`}
      </CodeHeading>
      <div className="
        flex flex-col gap-6
        md:flex-row md:gap-7
        ">
        <AboutBox title="Background">
          <p className="
            font-[PlusJakarta] font-medium text-[16px]
            md:text-[18px]
          ">
            I’m Lucas Harel. I'm currently 17 Years old and I have been learning design and coding since I was 14 years old. I’m an Intermediate Frontend Developer, Junior Backend Developer, and UI/UX Designer with 3+ years of coding experience. I’m currently focusing on Modern Web Design and improving my skills in Full-stack development along with intense learning and practices.
          </p>
        </AboutBox>
        <AboutBox title="Skills">
          <div className="
            pointer-events-auto
            w-full h-[max] relative left-0 flex items-center justify-center
            md:h-[calc(100%-60px)] md:relative md:left-[50%] md:translate-x-[-50%] md:top-0
          ">
            <LogoLoop
              logos={techLogos}
              speed={130}
              direction="left"
              logoHeight={70}
              gap={40}
              hoverSpeed={33}
              scaleOnHover
              fadeOut={false}
              fadeOutColor="#F5F5F5"
              ariaLabel="Technology partners"
            />
          </div>
        </AboutBox>
      </div>
    </>
  )
}