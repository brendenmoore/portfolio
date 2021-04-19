import React from "react"
import Layout from "../components/layout/Layout"
import { Helmet } from "react-helmet"
import PdfViewer from "../components/PdfViewer";
import resume from "../../static/resume.pdf"

const Resume = () => {
  return (
    <Layout>
      <Helmet>
        <title>Brenden Moore - Resume</title>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport"
        />
      </Helmet>
      <PdfViewer sourceDocument={resume}></PdfViewer>
    </Layout>
  )
}

export default Resume
