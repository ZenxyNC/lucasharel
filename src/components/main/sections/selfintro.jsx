import CodeHeading from "../components/codetext.cmp.jsx";
import StatusBadge from "../components/statusBadge.jsx";
import TechChip from "../components/techChip.jsx";


export default function SelfIntro() {
  const currentStatus = "Available"

  return (
    <div className="
      relative pointer-events-none
      md:absolute md:top-[50%] md:translate-y-[-50%] md:left-0
    ">
      <StatusBadge className="mb-2" status={currentStatus}/>
      <span className="font-[PlusJakarta] text-[24px] mt-10">Hi, I'm</span>
      <CodeHeading>
        {`<Lucas />`}
      </CodeHeading>
      <p className="
        font-[PlusJakarta] font-medium text-[16px] mt-2
        md:w-[full] md:max-w-[400px] md:text-[18px] md:mt-0
        2xl:max-w-[600px]
      ">
        I’m focusing in creating a high quality websites in all aspects—performance, design, and interactivity. I always adapt to the latest modern web technologies to build better products over time, creating  the best user experience.
      </p>
      <TechChip techsList={[
        "React", "JavaScript", "Vite", "Tailwind"
      ]} />
    </div>
  )
}
