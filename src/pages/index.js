import React from 'react'
import "../Style.css"


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
