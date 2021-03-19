import React from "react"
import Intro from "../components/home/Intro"
import LinkSection from "../components/home/LinkSection"
import AboutMe from "../components/home/AboutMe"
import Navbar from "../components/layout/Navbar"
import ProjectSection from '../components/home/ProjectSection'

const index = () => {
  return (
    <div>
      <Intro></Intro>
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <LinkSection></LinkSection>
      <ProjectSection></ProjectSection>
    </div>
  )
}

export default index
