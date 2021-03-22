import React from 'react'
import Styled from 'styled-components'
import Container from '@material-ui/core/Container';

import GithubLogo from '../images/github.svg'
import LinkedinLogo from '../images/linkedin.svg'
import TwitterLogo from '../images/twitter.svg'


const SocialStyled = Styled.aside`
    display:flex;
    margin:0;
    height: 10vh;
    width:100%;
 
    `

const WrapperItems = Styled.article`
  display:flex;
  height: 100px;
   align-items:center;
   gap: 30px;
   padding:0 0 30px;

 
  img {
    width:12%;
    max-width:40px;
    cursor:pointer;
  }



`

const Social = () => {
  return (
    <Container>
      <SocialStyled>
        <WrapperItems>
          <img src={GithubLogo} alt="Logo github" title="Clique e acesse meu github." />
          <img src={LinkedinLogo} alt="Logo Linkedin" title="Clique e acesse meu linkedin, conecte-se!" />
          <img src={TwitterLogo} alt="Logo Twitter" title="Estou no Twitter tbm. Segue lá!" />
        </WrapperItems>
      </SocialStyled>
    </Container>
  )
}

export default Social;
