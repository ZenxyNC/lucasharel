

export default function StatusBadge({ status = "Available", className }) {

  return (
    <div className={
      `w-max h-max pt-1 pb-1 pl-3 pr-3 bg-primary-transparent border rounded-full flex gap-2 items-center font-[PlusJakarta] font-semibold text-[16px] backdrop-blur-sm overflow-hidden pointer-events-none
        md:text-[16px]
      ${className}
    `}
      style={{
        color: status === "Available" ? "var(--color-accent)" : status === "Busy" ? "var(--color-busy)" : "var(--color-notavailable)",
        borderColor: status === "Available" ? "var(--color-accent)" : status === "Busy" ? "var(--color-busy)" : "var(--color-notavailable)",
      }}
    >
      <div
        className="w-3.25 aspect-square rounded-full md:w-3"
        style={{
          backgroundColor: status === "Available" ? "var(--color-accent)" : status === "Busy" ? "var(--color-busy)" : "var(--color-notavailable)",
          boxShadow: status === "Available" ? "0px 0px 28px 9px var(--color-accent)" : status === "Busy" ? "0px 0px 28px 9px var(--color-busy)" : "0px 0px 28px 9px var(--color-notavailable)"
        }} />
      {status}
    </div>
  )
}