

export default function CodeHeading({ children, className }) {

  return (
    <h1 className={`
      text-[44px] font-[SourceCodePro] font-black p-0 mt-[-12px]
      md:text-[68px]
      ${className}
    `}>
      {children}
    </h1>
  )  
}