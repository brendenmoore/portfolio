import React from "react"
import SectionLayout from "../layout/SectionLayout"
import SectionHeader from "../layout/SectionHeader"
import ProjectCard from "../ProjectCard"
import { graphql, useStaticQuery } from "gatsby"

const ProjectSection = () => {
  const {
    home: { featuredProjects },
  } = useStaticQuery(graphql`
    {
      home: sanityHomePage {
        featuredProjects {
          id
          description
          image {
            ...ImageWithPreview
          }
          slug {
            current
          }
          title
          technologies
          content: _rawContent
        }
      }
    }
  `)
  return (
    <SectionLayout>
      <SectionHeader>Projects</SectionHeader>
      <div className="space-y-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </SectionLayout>
  )
}

export default ProjectSection
