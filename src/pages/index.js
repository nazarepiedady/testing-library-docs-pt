/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {GridBlock} from '../components/GridBlock'
import {Container} from '../components/Container'
import {Showcase} from '../components/Showcase'
import Layout from '@theme/Layout'

const HomeSplash = props => {
  const {language = ''} = props
  const {siteConfig} = useDocusaurusContext()
  const {baseUrl, customFields} = siteConfig
  const docsPart = `${customFields.docsPath ? `${customFields.docsPath}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const SplashContainer = props => (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    </div>
  )

  const Logo = props => (
    <div className="projectLogo">
      <img src={props.img_src} alt="Logótipo do Projeto" />
    </div>
  )

  const ProjectTitle = () => (
    <div>
      <h2 className="projectTitle">{siteConfig.title}</h2>
      <div className="projectTaglineWrapper">
        <p className="projectTagline">{siteConfig.tagline}</p>
      </div>
    </div>
  )

  const Button = props => (
    <a
      className="button button--primary button--outline"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  )

  return (
    <SplashContainer>
      <Logo img_src={`${baseUrl}img/logo-large.png`} />
      <div className="inner">
        <ProjectTitle siteConfig={siteConfig} />
        <div className="pluginWrapper buttonWrapper">
          <Button href={'/docs/'}>Começar</Button>
        </div>
      </div>
    </SplashContainer>
  )
}

export default class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props
    const {baseUrl} = siteConfig

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align || 'center'}
          imageAlign={props.imageAlign || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    const FeatureCallout = () => (
      <Container className="" background={'light'} padding={['top', 'bottom']}>
        <div style={{textAlign: 'center'}}>
          <p>
            <i>
              Quanto mais os teus testes se parecerem com a maneira que o teu software é usado, <br />
              mais confiança eles podem dar-te.
            </i>
          </p>
        </div>
      </Container>
    )

    const Problem = () => (
      <React.Fragment>
        <Block background={'light'} align="left">
          {[
            {
              title: '',
              content:
                "## O Problema \n - Tu queres testes para a tua interface de utilizador que evitam a inclusão de detalhes de implementação e concentrar-te em fazer os teus testes darem-te a confiança para qual elas estão destinados. \n - Tu queres que os teus testes sejam sustentáveis assim as refatorações _(mudam a implementação mas não a funcionalidade)_ não quebram os teus testes e abrandam-te e a tua equipa.",
              image: `${baseUrl}img/interrobang-128x128.png`,
              imageAlt: 'O problema (imagem de um ponto de interrogação)',
              imageAlign: 'left',
            },
          ]}
        </Block>
      </React.Fragment>
    )

    const Solution = () => [
      <Block background={null} align="left">
        {[
          {
            title: '',
            image: `${baseUrl}img/star-128x128.png`,
            imageAlign: 'right',
            imageAlt: 'A solução (imagem de uma estrela)',
            content:
              '## A Solução \n A família da Testing Library de bibliotecas é uma solução muito leve para testagem sem todos os detalhes de implementação. Os utilitários principais que ela fornece envolve a consulta por nós de maneira parecida à como os utilizadores os encontrariam. Desta maneira, a testing-library ajuda a assegurar que os teus testes dam-te confiança no código da tua interface de utilizador.',
          },
        ]}
      </Block>,
      <Block background={'light'} align="left">
        {[
          {
            title: 'Princípio Orientador',
            image: `${baseUrl}img/trophy-128x128.png`,
            imageAlign: 'left',
            imageAlt: 'O princípio orientador (imagem de um muro de tijolo)',
            content:
              '_Quanto mais os teus testes se parecerem com a maneira que o teu software é usado, mais confiança eles podem dar-te._',
          },
        ]}
      </Block>,
    ]

    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            content:
              'Os testes apenas quebram quando a tua aplicação quebra, não os teus detalhes de implementação',
            image: `${baseUrl}img/wrench-128x128.png`,
            imageAlign: 'top',
            title: 'Escreva Testes Sustentáveis',
          },
          {
            content: 'Interaja com a tua aplicação da mesma maneira que os teus utilizadores',
            image: `${baseUrl}img/check-128x128.png`,
            imageAlign: 'top',
            title: 'Programe com Confiança',
          },
          {
            content:
              'Seletores embutidos encontram os elementos da mesma maneira que os utilizadores fazem para ajudar-te a escrever código inclusivo',
            image: `${baseUrl}img/tada-128x128.png`,
            imageAlign: 'top',
            title: 'Acessível por Padrão',
          },
        ]}
      </Block>
    )

    const Ecosystem = () => (
      <Block layout="fourColumn" background={null}>
        {[
          {
            image: `${baseUrl}img/react-128x128.png`,
            imageAlign: 'top',
            title: '[React](./docs/react-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/cypress-128x128.png`,
            imageAlign: 'top',
            title: '[Cypress](./docs/cypress-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/testcafe-128x128.jpg`,
            imageAlign: 'top',
            title: `[Testcafe](./docs/testcafe-testing-library/intro)`,
          },
          {
            image: `${baseUrl}img/svelte-logo.png`,
            imageAlign: 'top',
            title: '[Svelte](./docs/svelte-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/vue-400x400.png`,
            imageAlign: 'top',
            title: '[Vue](./docs/vue-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/angular-250x250.png`,
            imageAlign: 'top',
            title: '[Angular](./docs/angular-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/reason-200x200.png`,
            imageAlign: 'top',
            title: '[ReasonReact](./docs/bs-react-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/puppeteer-275x275.png`,
            imageAlign: 'top',
            title: '[Puppeteer](./docs/pptr-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/react-native-128x128.png`,
            imageAlign: 'top',
            title: '[React Native](./docs/react-native-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/preact-128x128.png`,
            imageAlign: 'top',
            title: '[Preact](./docs/preact-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/nightwatch-128x128.png`,
            imageAlign: 'top',
            title: '[Nightwatch](./docs/nightwatch-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/construction-128x128.png`,
            imageAlign: 'top',
            title: '[E muito mais...](./docs/ecosystem-user-event)',
          },
        ]}
      </Block>
    )

    const ShowcaseWrapper = () => {
      if ((siteConfig.customFields.users || []).length === 0) {
        return null
      }

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className="productShowcaseSection paddingBottom paddingTop">
          <h2>Quem está Usando Isto?</h2>
          <div className="logos">
            <Showcase
              users={siteConfig.customFields.users.filter(u => u.pinned)}
            />
          </div>
          <a
            className="button button--primary button--outline"
            href={pageUrl('users')}
          >
            Mais de {siteConfig.title} Utilizadores
          </a>
        </div>
      )
    }

    const Awards = () => {
      return (
        <div className="awardsSection paddingBottom paddingTop">
          <h2>Condecorações</h2>
          <Block layout="threeColumn" background={null}>
            {[
              {
                image: `${baseUrl}img/impactful-contribution-award-399x544.png`,
                imageAlign: 'top',
                imageLink: 'https://osawards.com/react/2019',
                imageAlt:
                  'Vencedor das Condecorações de Código Aberto de 2019 na categoria "A contribuição com mais impacto na comunidade"',
              },
              {
                image: `${baseUrl}img/highest-satisfaction-638x574.png`,
                imageAlign: 'top',
                imageLink: 'https://2020.stateofjs.com/en-US/awards/',
                imageAlt:
                  'Vencedor da Condecoração do Estado da JavaScript de 2020 para "a tecnologia com mais elevada percentagem de utilizadores satisfeitos"',
              },
            ]}
          </Block>
        </div>
      )
    }

    return (
      <Layout
        permalink="/"
        title={siteConfig.title}
        description={siteConfig.tagline}
      >
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <Problem />
          <Solution />
          <ShowcaseWrapper />
          <Ecosystem />
          <Awards />
        </div>
      </Layout>
    )
  }
}
