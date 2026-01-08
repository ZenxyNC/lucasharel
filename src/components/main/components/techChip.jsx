import React from 'react'

export default function TechChip({ techsList }) {
  return (
    <div className="w-max max-w-full h-max pt-1 pb-1 pl-4 pr-4 mt-4 relative flex items-center bg-primary-transparent border border-border rounded-full backdrop-blur-sm">
      {techsList.map((tech, index) => (
        <React.Fragment key={index}>
          <div className="w-max h-max font-[PlusJakarta] font-semibold text-[16px]">
            {tech}
          </div>
          {index < techsList.length - 1 && (
            <div className="w-0.75 h-5 bg-border rounded-full ml-[12px] mr-[12px]">

            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}