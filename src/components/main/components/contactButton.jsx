

export default function ContactButton({ icon, title, url, borderColor, bgColor, fontColor }) {
  return (
    <div 
      className={`
        w-full h-max bg-secondary-transparent text-[#F5F5F5] backdrop-blur-md border border-border-solid rounded-innerradius flex flex-row items-center gap-[16px] pt-2 pb-2 pr-3 pl-3 z-10 cursor-pointer
        hover:scale-[1.02] transition-all duration-400 ease-[cubic-bezier(.40,3,.41,.8)]
      `}
      role="button" tabIndex={0}
      onClick={() => window.open(url, "_blank")}
      onKeyDown={(e) => e.key === "Enter" || e.key === " " && window.open(url, "_blank")}
    >
      {icon}
      {title}
    </div>
  )
}