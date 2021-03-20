import React from "react"
import SectionLayout from "../layout/SectionLayout"
import SectionHeader from "../layout/SectionHeader"
import { graphql, useStaticQuery } from "gatsby"

const LinkSection = () => {
  const {
    allSanityLink: { links },
  } = useStaticQuery(graphql`
    {
      allSanityLink {
        links: nodes {
          icon {
            asset {
              url
            }
          }
          id
          title
          url
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
              <img
                src={link.icon.asset.url}
                alt={link.title}
                className="h-10 w-10"
              ></img>
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}

export default LinkSection
