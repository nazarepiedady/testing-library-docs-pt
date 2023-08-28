/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {GridBlock} from '../components/GridBlock'

const ExternalLink = props => (
  <a target="_blank" rel="noreferrer noopener" {...props} />
)
const Link = props => <a {...props} />

export default function Help(props) {
  const {language = ''} = props
  const {siteConfig} = useDocusaurusContext()
  const {baseUrl, docsUrl} = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const supportLinks = [
    {
      content: `Faça um pergunta na [Stack Overflow](https://stackoverflow.com/questions/tagged/react-testing-library)`,
      title: 'Stack Overflow',
    },
    {
      content:
        'Discuta problemas com os membros da comunidade na [Spectrum](https://spectrum.chat/testing-library)',
      title: 'Spectrum',
    },
    {
      content: `Converse na [Discord](https://discord.gg/testing-library)`,
      title: 'Discord',
    },
    {
      content: `Siga o [blogue](${props.config.baseUrl}blog)`,
      title: 'Blogue',
    },
    {
      content: `Dê uma vista de olhos no [Material de Aprendizado](/docs/learning)`,
      title: 'Recursos',
    },
    {
      content: `Receba suporte na [GitHub](${siteConfig.customFields.repoUrl})`,
      title: 'GitHub',
    },
  ]

  return (
    <Layout
      permalink="/help"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="wrapper">
        <div className="mainContainer documentContainer postContainer helpContainer">
          <div>
            <header>
              <h1>Precisas de ajuda?</h1>
            </header>
            <GridBlock
              contents={supportLinks.slice(0, 3)}
              layout="threeColumn"
              align="left"
            />
            <GridBlock
              contents={supportLinks.slice(3)}
              layout="threeColumn"
              align="left"
            />
            <section>
              <h2>Compre um Curso</h2>
              <p>
                Aprenda a testar a JavaScript com o{' '}
                <ExternalLink href="https://kentcdodds.com">
                  Kent C. Dodds
                </ExternalLink>
                , o criador da Testing Library, na{' '}
                <ExternalLink href="https://testingjavascript.com">
                  TestingJavaScript.com
                </ExternalLink>
              </p>
              <div>
                <ExternalLink href="https://testingjavascript.com">
                  <img
                    width="500"
                    alt="TestingJavaScript.com Aprenda a maneira inteligente e eficiente de testar qualquer aplicação de JavaScript."
                    src={`${baseUrl}img/testingjavascript.jpg`}
                  />
                </ExternalLink>
              </div>
            </section>
            <header className="postHeader">
              <h1>Queres ajudar?</h1>
            </header>
            <p>
              Obrigado! Os responsáveis da Testing Library estão felizes em manter esta biblioteca juntamente convosco, a comunidade. Nós não estamos a procura de financiamento, mas precisamos de todos à contribuir para fazer deste projeto e comunidade bem-sucedida e melhorar os testes para todos a longo prazo.
            </p>
            <p>

              Considere ajudar-nos a responder as questões da comunidade e atualizar o conteúdo da comunidade através das ligações de ajuda acima. Tu também podes apoiar o{' '}
              <ExternalLink href="https://kentcdodds.com">
                Kent C. Dodds
              </ExternalLink>{' '}
              financeiramente comprando os seus{' '}
              <ExternalLink href="https://kentcdodds.com/courses">
                cursos
              </ExternalLink>{' '}
              ou{' '}
              <ExternalLink href="https://kentcdodds.com/workshops/">
                oficinas remotas
              </ExternalLink>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
