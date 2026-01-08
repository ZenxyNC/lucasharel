

export default function StatusBadge({ className }) {

  return (
    <div className={
      `w-max h-max pt-1 pb-1 pl-3 pr-3 bg-primary-transparent border border-border rounded-full flex gap-2 items-center font-[PlusJakarta] font-semibold text-[16px] text-accent-light backdrop-blur-sm overflow-hidden pointer-events-none
        md:text-[16px]
      ${className}
    `}>
      <div className="
        w-3.25 aspect-square bg-accent rounded-full shadow-[0px_0px_28px_9px_var(--color-accent)]
        md:w-3
      "></div>
      Available
    </div>
  )
}