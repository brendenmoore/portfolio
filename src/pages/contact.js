import React from 'react'
import { Helmet } from "react-helmet";
import Layout from '../components/layout/Layout'
import {useForm} from '@formspree/react'

const Contact = () => {
      const [state, handleSubmit] = useForm("xoqyvlyw")
    return (
      <Layout>
        <Helmet>
          <title>Brenden Moore - Contact</title>
        </Helmet>
        {state.succeeded ? (
          <p className="mt-5">Message received.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col max-w-2xl">
            <label htmlFor="email" className="mt-5">Email Address</label>
            <input id="email" type="email" name="email" required />
            <label htmlFor="message" className="mt-5">Message</label>
            <textarea id="message" name="message" required />
            <button type="submit" disabled={state.submitting} className="bg-white mt-5 py-3">
              Submit
            </button>
          </form>
        )}
      </Layout>
    )
}

export default Contact
