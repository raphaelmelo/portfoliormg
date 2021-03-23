import React from 'react'
import Styled from 'styled-components'
import Logo from "../images/logo.svg"
import { Link } from "gatsby"
import Container from '@material-ui/core/Container';


const HeaderStyled = Styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:40px 0;
    margin:0;
    height: 10vh;
    width:100%;

    `

const LogoStyled = Styled.article`

    height: 10vh;
    display:flex;

    align-items:center;
    cursor:pointer;
    img {
      width:70px;
    }

`

const NavStyled = Styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    ul { 
        display:flex;
        justify-content:center;
        align-items:center;
        gap:0 20px ;
    }
    li {
        list-style:none;
        cursor:pointer;
     }

    a{
      font-family: 'Bangers', cursive;
      text-transform:uppercase;
     }

     .link {
      background:#fff;
      border-radius: 4px;
      color: #00C2FF;
      padding: 2px 4px;   
      transition:.2s;

      :hover {
        background:#00C2FF;
        color: #fff;
        transition:.2s;

      }
     }

`

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <LogoStyled>
          <Link to="/">
            <img src={Logo} alt="Logo do Site" Title="raphaelmelo.dev" />
          </Link>
        </LogoStyled>
        <NavStyled>
          <ul>
            <li><Link to="#portfolio">Portfólio</Link></li>
            <li><Link to="https://github.com/raphaelmelo" target="_blank" className="link">Github</Link></li>
            <li><Link to="https://www.linkedin.com/in/raphaelgois/" target="_blank" className="link">Linkedin</Link></li>
          </ul>
        </NavStyled>
      </HeaderStyled>
    </Container>

  )
}

export default Header
