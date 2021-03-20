import React from 'react'

const SectionLayout = ({bgColor, children}) => {
    return (
      <section className={`${bgColor} py-12 md:py-28`}>
        <div className="container">{children}</div>
      </section>
    )
}

export default SectionLayout
