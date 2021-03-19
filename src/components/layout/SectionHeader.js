import React from "react"

const SectionHeader = ({ children, color }) => {
  return (
    <>
      <h1 className="text-5xl sm:text-6xl font-mono mb-6">
        {children}
      </h1>
      <hr className={`${color != "blue" ? "border-black" : "border-blue-800"} border max-w-xs`}></hr>
      <div className="h-24"></div>
    </>
  )
}

export default SectionHeader
