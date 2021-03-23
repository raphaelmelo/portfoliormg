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

    @media (max-width: 425px){
      padding-top:50px;
      flex-direction:column;
      justify-content:flex-start;
 
    }


  
 `
const RostoStyled = Styled.article`

     img {
       min-width: 60px;
       cursor:pointer;
    }
  
    .rotateAnimation {
      width: 120px;

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

    .boxHead {
	    display: flex;
    }

    .Head { 
	      animation: jump 1.2s ease-in infinite;
        animation-delay: 0.3s;
        width:12vw;
        :hover {

        }
        }
        @keyframes jump {
          0%, 100% {
          transform: translateY(0);
      }
          50% {
        transform: translateY(-10px);
      }
    }


`
const Confetes = Styled.article`
       position: relative;


       .reactLogo{
        position: absolute;
        left: 100%;
        z-index:-1;
        width: 10vw;
        min-width: 120px;   

        @media (max-width: 425px){
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
        font-size:clamp(3.2rem, 6vw, 6rem)

      } 
      span {
        color: #0B3D61;

      }
      .textDescription {
        font-size:clamp(26px, 4vw, 2.4rem)

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
            <div className="boxHead">
              <img src={Raphael} alt="rosto do raphael melo" className="Head" title="Oi, sou o rosto do Rapha em um loop infinito!" />
            </div>
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
