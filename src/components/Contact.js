import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';

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
       
     h2, h3 {
        font-family: Bangers, "sans serif";
        text-transform: uppercase;
        line-height: 90%;
      } 
      span {
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
    font-size:16px;


`

const Contact = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const Year = new Date();

  return (
    <>
      <WrapperContact id="contact">
        <TextWrapperStyled>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <>
              <Typography variant="h2" components="h2">FALE COMIGO POR </Typography>
              <Typography variant="h2" components="h2">
                <span>
                  <a href="mailto:contatowbm@gmail.com" title="Clique aqui e me mande um email!">EMAIL</a> OU <a href="linkedin.com/in/raphaelgois" title="Clique aqui e conecte-se">in!</a></span></Typography>
            </>
          </Fade>
        </TextWrapperStyled>
      </WrapperContact>
      <FooterContact>
        desing & desenvolvimento por raphael melo © {Year.getFullYear()}
      </FooterContact>
    </ >
  )
}

export default Contact;
