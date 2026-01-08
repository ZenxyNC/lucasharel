

export default function AboutBox({ children, title = "Title" }) {
  return (
    <div className="
    w-full h-[max] pl-6 pr-6 pt-4 pb-5 rounded-outerradius border border-border backdrop-blur-md relative
    md:w-[calc(50%-14px)]
    ">
      <h2 className="font-[PlusJakarta] font-bold text-[24px]">{title}</h2>
      <div className="w-full h-[3px] bg-border rounded-full mt-2 mb-3" ></div>
      {children}
    </div>
  )
}