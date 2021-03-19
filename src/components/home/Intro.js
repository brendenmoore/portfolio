import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      home: sanityHomePage {
        heroText
        backgroundImage {
          asset {
            gatsbyImageData
            url
          }
        }
      }
    }
  `)

  return (
    <section
      style={{
        backgroundImage: `url(${data.home.backgroundImage.asset.url})`,
      }}
      className="relative w-full h-full min-h-screen bg-cover bg-center bg-fixed flex justify-center"
    >
      <div className="absolute w-full h-full left-0 top-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 flex items-center">
        <div className="container mx-auto text-white space-y-10 mt-12 mb-20 lg:-mt-7">
          <p className="text-lg">Oh hello, nice to meet you!</p>
          <h1 className="text-7xl sm:text-8xl font-mono">{data.home.heroText}</h1>
        </div>
      </div>
    </section>
  )
}

export default Intro
