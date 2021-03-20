import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import PortableText from "react-portable-text"

const ProjectCard = ({ project }) => {
  console.log(project.content)
  return (
    <div className="space-y-10 md:space-y-0 md:flex md:space-x-10 bg-gray-100 py-16 px-12">
      <SanityImage
        {...project.image}
        width={200}
        className="w-20 h-20"
        alt="project.title"
      ></SanityImage>
      <div>
        <h1 className="text-2xl mb-3">{project.title}</h1>
        <h2 className="text-lg italic mb-6">{project.description}</h2>
        <PortableText
          className="space-y-2 max-w-3xl"
          content={project.content}
          serializers={{
            link: (props) => <a target="_blank" className="text-blue-500" {...props}></a>,
          }}
        />
      </div>
      <aside>
          <h2 className="text-lg mb-3">Technologies:</h2>
          <ul className="list-disc list-inside">
              {project.technologies.map(item => <li>{item}</li>)}
          </ul>
      </aside>
    </div>
  )
}

export default ProjectCard
