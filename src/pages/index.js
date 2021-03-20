import React from "react"
import Intro from "../components/home/Intro"
import LinkSection from "../components/home/LinkSection"
import AboutMe from "../components/home/AboutMe"
import Navbar from "../components/layout/Navbar"
import ProjectSection from '../components/home/ProjectSection'
import {Helmet} from 'react-helmet'

const index = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brenden Moore - Web Developer</title>
      </Helmet>
      <Intro></Intro>
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <LinkSection></LinkSection>
      <ProjectSection></ProjectSection>
    </div>
  )
}

export default index
