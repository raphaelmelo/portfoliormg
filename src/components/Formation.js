import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const WrapperStyled = Styled.section`
    min-height:85vh;

`
const TextWrapperStyled = Styled.article`
    height:240px;
    background-color:#0B3D61;
    display:flex;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
       

      h1, h2, h3 {
        font-family: Bangers;
        text-transform: uppercase;
        line-height: 90%;
        
      } 
      span {
        color: #0B3D61;
      } 
 `
const SkillsWrapperStyled = Styled.article`
      min-height: 60vh;
      display:flex;
      align-items:center;
      justify-content:center;
      @media (max-width: 425px){
      padding: 50px 0 0 0 ;
      flex-direction:column;

 
    }
      article {
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        width:50%;
        gap: 30px;

        p {
          height:20px;
          margin-bottom:0;
          margin:0;
  
          font-size:clamp(18px, 2.8vw, 1.4rem);

        }
        span {
          color: #82C7F1;
        }

      }

      .stageAnimation {

        display: flex;
        height: 330px;
        width: 50%;
    }
      .box {
          align-self: flex-end;
          animation-duration: 1.4s;
          animation-iteration-count: infinite;
          height: 300px;
          margin: 0 auto 0 auto;
          transform-origin: bottom;
          
      }
      .bounce-3 {
          animation-name: bounce-3;
          animation-timing-function: ease;
      }
      @keyframes bounce-3 {
          0%   { transform: translateY(0); }
          30%  { transform: translateY(-10px); }
          50%  { transform: translateY(0); }
          100% { transform: translateY(0); }
      }

`

const Formation = () => {

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
    <WrapperStyled>
      <TextWrapperStyled>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={400} distance="30px">
          <Typography variant="h2" components="h1">Formação</Typography>
        </Fade>
      </TextWrapperStyled>

      <SkillsWrapperStyled>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={450} distance="30px">
          <article>
            <p>ADS <span>-</span> FACULDADE IMPACTA <span>01/21 - 06/23</span></p>
            <p>SISTEMAS PARA INTERNET <span>-</span> SENAI <span>09/20 - 03/22</span></p>
            <p>DEV WEB FULLSTACK <span>-</span> BOOTCAMP LABENU <span>03 - 09/20</span></p>
          </article>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <article class="stageAnimation">
            <img
              src="https://res.cloudinary.com/doligjahp/image/upload/v1616343037/samples/raphaelmelo/zap_lxnpdk.svg"
              className="box bounce-3"
              alt="Zap!"
              title="Essas são as principais formações do Rapha!" />
          </article>
        </Fade>
      </SkillsWrapperStyled>
    </WrapperStyled >
  )
}

export default Formation;
