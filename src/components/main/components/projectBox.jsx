

export default function ProjectBox({ appicon, appurl, appname, appdescription }) {
  return (
    <div className="
      pointer-events-auto
      w-full h-[full] pl-4 pr-4 pt-4 pb-5 rounded-outerradius border border-border backdrop-blur-lg relative cursor-pointer
      md:w-[calc(50%-14px)] md:h-[240px] md:pl-5 md:pr-5 md:pt-5 md:pb-5
      hover:scale-[1.02]  transition-all duration-400 ease-[cubic-bezier(.40,3,.41,.8)]
    "
    onClick={() => window.open(appurl, "_blank")}
    >
      <div
        className="flex items-center gap-4 mb-3"
      >
        <img 
          src={`${appicon}`} 
          alt={appname}
          className="
            w-[64px] aspect-square rounded-innerradius border border-border bg-[#0F131A]
            md:w-[80px] md:aspect-square
          "/>
        <span className="">
          <h2 className="font-[PlusJakarta] font-bold text-[24px]">{appname}</h2>
        </span>
      </div>
      <p className="
        font-[PlusJakarta] font-medium text-[16px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full
        md:text-[18px] md:max-h-[calc(100%-100px)] overflow-x-hidden overflow-y-scroll
      ">{appdescription}</p>
    </div>
  );
}