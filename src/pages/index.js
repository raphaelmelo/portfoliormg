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
      <Helmet htmlAttributes={{ lang: 'pt-br' }}>
        <meta name="title" content="Raphael Melo - Dev Front-end" />
        <meta name="description" content="Sou Desenvolvedor Front-end e esse é meu portfólio!" />
        <meta name="keywords" content="desenvolvedor, front-end, dev, javascript, react, full stack" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
