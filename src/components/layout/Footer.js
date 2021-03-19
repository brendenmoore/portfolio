import React from "react"

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white">
      <div className="container mx-auto flex justify-around items-center">
        <p>©{new Date().getFullYear()} Brenden Moore</p>
      </div>
    </footer>
  )
}

export default Footer
