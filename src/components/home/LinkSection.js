import React from "react"
import SectionLayout from "../layout/SectionLayout"
import SectionHeader from "../layout/SectionHeader"
import { graphql, useStaticQuery } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"

const LinkSection = () => {
  const {
    sanityHomePage: { links },
  } = useStaticQuery(graphql`
    {
      sanityHomePage {
        links {
          id
          title
          url
          icon {
            ...ImageWithPreview
          }
        }
      }
    }
  `)

  return (
    <SectionLayout bgColor="bg-blue-100">
      <SectionHeader color="light">Links</SectionHeader>
      <div className="">
        <div className="grid sm:grid-cols-3 gap-6 text-2xl md:text-4xl font-thin">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="flex items-center space-x-4"
            >
              <SanityImage
                {...link.icon}
                alt={link.title}
                className="h-10 w-10"
              ></SanityImage>
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}

export default LinkSection
