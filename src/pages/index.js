import React from 'react'
import "../Style.css"
import { Helmet } from "react-helmet"


import Header from "../components/Header"
import Home from "../components/Home"
import HardSkills from "../components/HardSkills"
import SoftSkills from "../components/Softskills"
import Formation from "../components/Formation"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"



const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Raphael Melo - Dev Front-end</title>
        <meta name="description" content="Sou Desenvolvedor Front-end e esse é meu portfólio!" />
        <meta name="image" content="https://res.cloudinary.com/doligjahp/image/upload/v1616343035/samples/raphaelmelo/rosto_u1diwh.webp" />
      </Helmet>

      <Header />
      <Home />
      <HardSkills />
      <SoftSkills />
      <Formation />
      <Portfolio />
      <Contact />
    </>
  )
}

export default IndexPage
