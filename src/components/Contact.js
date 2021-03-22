import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

const WrapperContact = Styled.section`
  height: 400px;
  width:100%;
`
const TextWrapperStyled = Styled.article`
    height:400px;
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
        font-size:clamp(2.7rem, 5vw, 2.9rem)

 
      } 
      span {
        }  

      .link {
        border-bottom: 6px solid #0B3D61;
        color: #00C2FF;

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
      font-size:12px;
      color: #ddd;
      font-family:sans-serif;
      text-transform:uppercase;
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
        </TextWrapperStyled>
      </WrapperContact>
      <FooterContact>
        <h6>desing & desenvolvimento por raphael melo © {Year.getFullYear()}</h6>
      </FooterContact>
    </>
  )
}

export default Contact
