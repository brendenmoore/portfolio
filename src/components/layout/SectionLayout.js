import React from 'react'

const SectionLayout = ({bgColor, children}) => {
    return (
      <section className={`${bgColor} py-12 md:py-36`}>
        <div className="container">{children}</div>
      </section>
    )
}

export default SectionLayout
