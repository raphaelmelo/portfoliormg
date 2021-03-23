import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Container from '@material-ui/core/Container'

import Button from '@material-ui/core/Button'

const WrapperStyled = Styled.section`

`
const TextWrapperStyled = Styled.article`
    height:400px;
    background: #0B3D61; 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
       
      h1, h2, h3 {
        font-family: Bangers, "sans serif";
        text-transform: uppercase;
        line-height: 90%;
      } 

      span {
        color: #00C2FF;      }  
    
 `
const ContainerMaterial = Styled(Container)`
    display:flex;
    flex-direction:column;
    height: 100%;

 `
const FiltersWrapper = Styled.article` 
    width:100%;
    padding: 100px 0 30px ;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:20px;
           
    button {
      width: 200px;
      height: 40px;
      color:#fff;
      border-radius: 4px;
      text-transform:uppercase;
      font-size:clamp(0.6rem, 75%, 4rem);
      background: #0B3D61; 
       
       :hover{
        background: #00c2ff; 

      }
      :active{
        background: #00c2ff; 

      }

    }
 

`
const PortfolioWrapper = Styled.section` 
    padding: 40px 0;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap: 20px;

    @media (max-width: 425px){
      justify-content:center;

        }



`
const PortfolioItem = Styled.article` 
    width: 45%;
    min-width:260px; 
    height: auto;
    padding-bottom:20px;
    
    img {
      width:100%;
      border-radius: 4px;
    }
`
const PortfolioItemFilter = Styled.article` 
    width: 100%;
    height:80px;
    background-color: #006DBC;
    display:flex;

    article {
    width:140px;
    height:100%;
    padding: 6px;
    display:flex;
    align-items:center;
    justify-content:center;
    }
    .titleItem {
    background-color:#2CAFFF;
    font-size:28px;
    }

    .descriptionItem {
      background-color:#006DBC;
      width:100%; 
      font-size:20px;
    }

`

const Portfolio = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [filterArr, setFilterArr] = useState('')

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
    setFilterArr('')
  }, [])

  const dataProjects = [
    {
      name: 'BarDireirinho.com',
      description: 'Site institucional do Bar Direitinho.com',
      type: 'Freela',
      url: 'http://direitinho.com/',
      image: 'https://res.cloudinary.com/doligjahp/image/upload/v1616505723/samples/raphaelmelo/direitinho_ist8jb.png',
      tech: 'website freela: HTML, CSS, JAVASCRIPT, NEXT JS, FIGMA, VERCEL;',
    },
    {
      name: 'Mila Descartaveis',
      description: 'Site institucional da Mila Descartáveis',
      type: 'Freela',
      url: 'https://miladescartaveis.com.br/',
      image: 'https://res.cloudinary.com/doligjahp/image/upload/v1616505722/samples/raphaelmelo/mila_pk8ue7.png',
      tech: 'website freela: HTML, CSS, JAVASCRIPT, NEXT JS, FIGMA, VERCEL;',
    },
    {
      name: 'Marvel API',
      description: 'Javascript',
      type: 'Projeto',
      url: 'https://marvelapibyraphaelmelo.netlify.app/',
      image: 'https://res.cloudinary.com/doligjahp/image/upload/v1616505723/samples/raphaelmelo/marvel_nipjm8.png',
      tech: 'MVC: HTML, CSS, JAVASCRIPT,',
    },
    {
      name: 'Carreira Unica Estudo',
      description: 'Estudos',
      type: 'Projeto',
      url: 'https://aulascarreiraunica.netlify.app/',
      image: 'https://res.cloudinary.com/doligjahp/image/upload/v1616505722/samples/raphaelmelo/unica_aer9ed.png',
      tech: 'Site com aulas do projeto Carreira Única',
    },
    {
      name: 'Javascript Estudo',
      description: 'Javascript Estudos',
      type: 'Projeto',
      url: 'https://colors-names-raphael-melo.netlify.app/',
      image: 'https://res.cloudinary.com/doligjahp/image/upload/v1616505722/samples/raphaelmelo/colors_d22cp4.png',
      tech: 'Praticando com JAVASCRIPT',
    },
    {
      name: 'Javascript Estudo',
      description: 'Javascript Estudos',
      type: 'Projeto',
      url: 'https://animal-it-rapael-melo.netlify.app/',
      image: 'https://res.cloudinary.com/doligjahp/image/upload/v1616505722/samples/raphaelmelo/animal_mqyjsx.png',
      tech: 'Praticando com JAVASCRIPT',
    },
  ];

  function handleProjectFilter() {
    setFilterArr('Freela')
    console.log('Freela')
  }
  function handleFreelasFilter() {
    setFilterArr('Projeto')
    console.log('Projeto')
  }
  function handleFilter() {
    setFilterArr('')
  }

  const Filters = dataProjects
    .filter(item => item.type !== filterArr)
    .map(item => {
      return (
        <PortfolioItem>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
            delay={500}
            distance="30px"
          >
            <a href={item.url} rel="noreferrer" target="_blank">
              <img src={item.image} alt={item.description} title="Acesse!" />
            </a>
            <PortfolioItemFilter>
              <article className="titleItem">{item.type}</article>
              <article className="descriptionItem">{item.tech}</article>
            </PortfolioItemFilter>
          </Fade>
        </PortfolioItem>
      )
    })

  return (
    <WrapperStyled id="portfolio">
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
              Portfolio
            </Typography>
            <Typography variant="h2" components="h2">
              <span>& projetos</span>
            </Typography>
          </>
        </Fade>
      </TextWrapperStyled>

      <ContainerMaterial>
        <FiltersWrapper>
          <Button
            className="todos"
            variant="contained"
            size="medium"
            onClick={handleFilter}
          >
            {' '}
            Todos{' '}
          </Button>
          <Button
            className="freelas"
            variant="contained"
            size="medium"
            onClick={handleFreelasFilter}
          >
            {' '}
            Freelas{' '}
          </Button>
          <Button
            className="projetos"
            variant="contained"
            size="medium"
            onClick={handleProjectFilter}
          >
            {' '}
            Projetos{' '}
          </Button>
        </FiltersWrapper>
        <PortfolioWrapper>{Filters}</PortfolioWrapper>
      </ContainerMaterial>
    </WrapperStyled>
  )
}

export default Portfolio
