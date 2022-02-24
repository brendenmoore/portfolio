import React from "react"
import Layout from "../components/layout/Layout"
import { Helmet } from "react-helmet"

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
    </Layout>
  )
}

export default Resume
