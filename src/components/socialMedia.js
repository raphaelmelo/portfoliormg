import React from 'react'
import Styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { Link } from "gatsby"

import GithubLogo from '../images/github.svg'
import LinkedinLogo from '../images/linkedin.svg'
import TwitterLogo from '../images/twitter.svg'


const SocialStyled = Styled.aside`
    display:flex;
    margin:0;

    `

const WrapperItems = Styled.article`
  
  img {
    width:4vh;
    max-width:36px;
    min-width:16px;
    margin-right: 20px;
    }

`

const Social = () => {
  return (
    <Container>
      <SocialStyled>
        <WrapperItems>

          <Link to="https://github.com/raphaelmelo/" target="_blank" className="link">
            <img src={GithubLogo} alt="Logo github" title="Clique e acesse meu github." />
          </Link>
          <Link to="https://www.linkedin.com/in/raphaelgois/" target="_blank" className="link">
            <img src={LinkedinLogo} alt="Logo Linkedin" title="Clique e acesse meu linkedin, conecte-se!" />
          </Link>
          <Link to="https://twitter.com/devr4pha" target="_blank" className="link">
            <img src={TwitterLogo} alt="Logo Twitter" title="Estou no Twitter tbm. Segue lá!" />
          </Link>
        </WrapperItems>
      </SocialStyled>
    </Container>
  )
}

export default Social;
