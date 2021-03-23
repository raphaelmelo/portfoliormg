import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"


import GithubLogo from '../images/github.svg'
import LinkedinLogo from '../images/linkedin.svg'
import TwitterLogo from '../images/twitter.svg'


const WrapperContact = Styled.section`
  height: auto;
  width:100%;
  
`
const TextWrapperStyled = Styled.article`
  height:90vh;
  background: #1467A4; 
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  text-transform:uppercase;
   
  h2 {
    font-family: Bangers, "sans serif";
    text-transform: uppercase;
    line-height: 90%;
    font-size:clamp(2.7rem, 5vw, 3.5rem)
    } 
  .link {
    border-bottom: 6px solid #0B3D61;
    color: #00C2FF;
    }
    
 `

const SocialStyled = Styled.div`
    display:flex;
    padding: 30px 0 0 0 ;

img {
    width:4vh;
    max-width:36px;
    min-width:16px;
    margin-right: 20px;
    border-bottom: none;
    
}

`

const FooterContact = Styled.footer`
    height: 100px;
    width:100%;
    background: #0B3D61;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;

  h6 {
    font-size:10px;
    color: #ddd;
    font-family:sans-serif;
    text-transform:uppercase; 
    font-weight: 300;
    }



`

const Contact = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  const Year = new Date()

  return (
    <>
      <WrapperContact id="contact">
        <TextWrapperStyled>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            <>
              <Typography variant="h2" components="h2">
                FALE COMIGO POR{' '}
              </Typography>
              <Typography variant="h2" components="h2">
                <span>
                  <Link to="mailto:contatowbm@gmail.com/" target="_blank" className="link">EMAIL</Link>
                  <span> OU </span>
                  <Link to="https://www.linkedin.com/in/raphaelgois/" target="_blank" className="link">Linkedin</Link>
                </span>!
              </Typography>
            </>
          </Fade>
          <SocialStyled>
            <Link to="https://github.com/raphaelmelo/" target="_blank" >
              <img src={GithubLogo} alt="Logo github" title="Clique e acesse meu github." />
            </Link>
            <Link to="https://www.linkedin.com/in/raphaelgois/" target="_blank" >
              <img src={LinkedinLogo} alt="Logo Linkedin" title="Clique e acesse meu linkedin, conecte-se!" />
            </Link>
            <Link to="https://twitter.com/devr4pha" target="_blank" >
              <img src={TwitterLogo} alt="Logo Twitter" title="Estou no Twitter tbm. Segue lá!" />
            </Link>
          </SocialStyled>
        </TextWrapperStyled>


      </WrapperContact>


      <FooterContact>
        <h6>desing & desenvolvimento por raphael melo © {Year.getFullYear()} | GatsbyJs ❤</h6>
      </FooterContact>


    </>
  )
}

export default Contact
