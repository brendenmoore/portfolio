import React from "react"
import SectionHeader from "../layout/SectionHeader"
import SectionLayout from "../layout/SectionLayout"
import SanityImage from "gatsby-plugin-sanity-image"
import { graphql, useStaticQuery } from "gatsby"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      home: sanityHomePage {
        aboutHeader
        aboutImage {
          ...ImageWithPreview
        }
        aboutContent
      }
    }
  `)

  const {
    home: {
      aboutHeader,
      aboutContent,
      aboutImage
    },
  } = data
  console.log(aboutContent)
  return (
    <SectionLayout>
      <SectionHeader color="blue">{aboutHeader}</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="max-w-lg justify-self-center sm:justify-self-end sm:col-start-2">
          {/* <StaticImage
            src="../images/profile.jpg"
            alt="Profile"
            placeholder="blurred"
            transformOptions={{ cropFocus: "attention", fit: "cover" }}
            className="w-28 h-28 rounded-full sm:w-full sm:h-1/2 md:h-full sm:rounded-md shadow object-cover"
          ></StaticImage> */}
          <SanityImage
            {...aboutImage}
            alt="Profile"
            className="w-28 h-28 rounded-full sm:w-full sm:h-1/2 md:h-full sm:rounded-md shadow object-cover mb-6"
          ></SanityImage>
        </div>
        <div className="space-y-3 row-start-2 col-start-1 sm:row-start-1">
          <p className="text-xl text-blue-800 whitespace-pre-wrap">
            {aboutContent}
          </p>
        </div>
      </div>
    </SectionLayout>
  )
}

export default AboutMe
