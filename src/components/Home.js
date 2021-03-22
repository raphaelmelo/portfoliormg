import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components'
import Raphael from ".././images/rosto.webp"
//import ConfetesImage from ".././images/confetes.svg"
import ReactLogo from ".././images/react.svg"
import SocialMedia from "./socialMedia"
import Fade from 'react-reveal/Fade';
import Container from '@material-ui/core/Container';

const HomeStyled = Styled.main`
  height:77vh;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    @media (max-width: 400px){
      padding-top:50px;
      flex-direction:column;
      justify-content:flex-start;
 
    }


  
 `
const RostoStyled = Styled.article`

     img {

       width: 20vw;
       min-width: 60px;
 
      cursor:pointer;
    }
    .rotateAnimation {
        animation: rotation 1.2s infinite linear;

        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
          }
      }
    };
  };


`
const Confetes = Styled.article`
       position: relative;


       .reactLogo{
        position: absolute;
        left: 50%;
        z-index:-1;
        width: 15vw;
        min-width: 120px;   
        @media (max-width: 400px){
          display:none;
 
    }

         }


  
`
const TitleStyled = Styled.article`
  
      text-transform:uppercase;
      justify-content:center;
      

      h1, h2, h3 {
        font-family: Bangers;
        text-transform: uppercase;
        line-height: 90%;

      } 
      span {
        color: #0B3D61;

      }
      .textDescription {
        font-size:clamp(24px, 5vw, 2.9rem)

      }
`


const Home = () => {


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



  return (
    <Container>
      <HomeStyled>
        <Fade left={isDesktop} bottom={isMobile} duration={150} delay={300} distance="30px">
          <RostoStyled>
            <Confetes>
              <img src={ReactLogo} className="rotateAnimation  reactLogo" alt="React" />
            </Confetes>
            <img src={Raphael} alt="rosto do raphael melo" className="rotateAnimation" title="Oi, sou o rosto do Rapha em um loop infinito!" />

          </RostoStyled>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={50} delay={200} distance="30px">
          <TitleStyled>
            <Typography variant="h1" components="h1" >Raphael Melo</Typography>
            <Typography variant="h1" components="h2"><span>DEV front-end</span></Typography>
            <Typography variant="h3" components="h3" className="textDescription">portfólio, estudos e mais!</Typography>
          </TitleStyled>
        </Fade>
      </HomeStyled>
      <SocialMedia />
    </Container>
  )
}

export default Home;
