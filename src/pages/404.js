import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <Header/>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer/>
  </div>
)

export default NotFoundPage
