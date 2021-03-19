import React from 'react'
import SectionLayout from "../layout/SectionLayout"
import SectionHeader from "../layout/SectionHeader"
import { graphql, useStaticQuery } from "gatsby"

const ProjectSection = () => {
    return (
        <SectionLayout>
            <SectionHeader>Projects</SectionHeader>
        </SectionLayout>
    )
}

export default ProjectSection
