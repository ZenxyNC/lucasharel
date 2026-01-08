import LucasHarel from '../../../resources/LucasHarel.png';

export default function Picture() {
  return (
    <div className="
      w-[calc(100dvw-120px)] h-max relative left-[50%] translate-x-[-50%] max-w-[360px] pointer-events-none
      md:w-[12dvw] md:min-w-[320px] md:max-w-[360px] md:left-[unset] md:top-[50%] md:translate-y-[-50%] md:translate-x-[unset]
    ">
      <img src={LucasHarel} alt="Lucas" className='w-full aspect-square object-cover rounded-outerradius border border-border' />
      <div className="
        w-max h-max pt-[4px] pb-[4px] pl-[16px] pr-[16px] border border-border rounded-innerradius bg-primary-transparent backdrop-blur-sm absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] text-[20px] text-font font-bold
        md:text-[24px]
      ">
        Frontend Developer
      </div>
    </div>
  )
}