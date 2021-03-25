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
      <Helmet  >
        <meta charSet="utf-8" />
        <title>Raphael Melo - Dev Front-end</title>
        <meta name="description" content="Raphael Melo é desenvolvedor Front-end Javascript em constante estudo, no site você vai ver seu portfólio de projetos, freelas e estudos." />
        <meta name="image" content="https://res.cloudinary.com/doligjahp/image/upload/v1616631776/samples/raphaelmelo/18662871_lkuxxa.jpg" />
        <meta http-equiv="Content-Language" content="pt-br" />
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
