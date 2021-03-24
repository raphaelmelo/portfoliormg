import React from 'react'
import Styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { Link } from "gatsby"


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
          <Link to="https://github.com/raphaelmelo/" rel="noreferrer" target="_blank" className="link">
            <img src="https://res.cloudinary.com/doligjahp/image/upload/v1616343034/samples/raphaelmelo/github_qx9fit.svg" alt="Logo github" title="Clique e acesse meu github." />
          </Link>
          <Link to="https://www.linkedin.com/in/raphaelgois/" rel="noreferrer" target="_blank" className="link">
            <img src="https://res.cloudinary.com/doligjahp/image/upload/v1616343034/samples/raphaelmelo/linkedin_mn9yw2.svg" alt="Logo Linkedin" title="Clique e acesse meu linkedin, conecte-se!" />
          </Link>
          <Link to="https://twitter.com/devr4pha" rel="noreferrer" target="_blank" className="link">
            <img src="https://res.cloudinary.com/doligjahp/image/upload/v1616343036/samples/raphaelmelo/twitter_dpf3wl.svg" alt="Logo Twitter" title="Estou no Twitter tbm. Segue lá!" />
          </Link>
        </WrapperItems>
      </SocialStyled>
    </Container>
  )
}

export default Social;
