import React from 'react';
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ModalOne } from './components/ModalOne/ModalOne';
import { ModalTwo } from './components/ModalTwo/ModalTwo';
import { ModalThree } from './components/ModalThree/ModalThree';

import image1 from './assets/image_o-que-estamos-fazendo.png';
import image2 from './assets/image_ferramentas-indispensaiveis.png';
import image3 from './assets/image_magia-real.png';
import image4 from './assets/image_conheca-alguns-clientes.png';
import { ModalFour } from './components/ModalFour/ModalFour';

const App = () => {
  return (
    <div>
      <Header />
      <Card cards={[
        {
          id: 1,
          image: image1,
          title: 'O que estamos fazendo para ajudar o seu negócio',
          description: <>
            Durante todo o período de quarentena, estamos à total disposição de cada 
            um de vocês, clientes. O COVID-19 chegou desestabilizando o país 
            e trazendo consigo uma grande incógnita quanto a proporção disso no país, 
            nas pessoas e principalmente, na economia.
            <br/> <br/>
            <strong>
              Nosso compromisso com você durante essa fase, é para 
              assegurar que o seu negócio seja o menos afetado 
              possível, mantendo sua base de clientes fidelizados 
              sólida e segura!
            </strong>
          </>,
          modal: <ModalOne btnText={'VER MAIS'}/>
        },
        {
          id: 2,
          image: image2,
          title: 'Ferramentas indispensáveis nesse momento',
          description: <>
            Você sabe que magos contam com bons artifícios para 
            fazer sua magia acontecer. Com nós FideWizards não é 
            diferente!
            <br/> <br/>
            Contamos com ferramentas poderosas para fazer nossa 
            mágica acontecer e fidelizar seus clientes. Especialmente 
            neste período em que o COVID-19 nos pegou 
            desprevenidos, vamos compartilhar com você nossas 
            ferramentas e fórmulas mágicas, afinal, queremos ver o seu 
            negócio se destacando e superando essa fase, como um 
            toque de mágica.
          </>,
          modal: <ModalTwo btnText={'CONHEÇA AGORA O QUE ESTÁ A SUA DISPOSIÇÃO'}/>
        },
        {
          id: 3,
          image: image3,
          title: 'Como tornar a magia real',
          description: <>
            O momento é crítico, mas fazendo as ações corretas e 
            traçando as estratégias de retomada, vamos trabalhar 
            juntos para manter o seu negócio funcionando e seus 
            clientes fidelizados!
            <br/> <br/> 
            Confira alguns materiais para te ajudar a ter insights e 
            promover seu negócio durante a quarentena.
          </>,
          modal: <ModalThree btnText={'VER MATERIAIS'}/>
        },
        {
          id: 4,
          image: image4,
          title: 'Conheça alguns clientes que compartilharam suas experiências',
          description: <>
            Estamos a todo vapor neste período de quarentena, 
            auxiliando e configurando as ferramentas para que nossos 
            clientes possam manter uma comunicação perene com 
            seus respectivos públicos.
            <br/>
            Neste momento, nosso objetivo principal é manter o seu 
            negócio saudável e com mínimo de danos ocasionados 
            pela crise!
            <br/><br/>
            Manter o contato com a sua base de clientes é a melhor 
            estratégia, seja oferecendo seus produtos com entregas 
            delivery fazendo vendas antecipadas, provendo ações para 
            a retomada pós quarentena, e outras diversas opções 
            estratégicas.
            <br/><br/>
            O importante é manter-se presente no dia a dia dos clientes, 
            para que eles lembrem-se da sua marca e sejam motivados 
            a voltar para o seu estabelecimento assim que tudo se 
            acalmar, e mais, optar pelos seus produtos ou serviços se 
            isso for uma opção neste período.
            <br/><br/>
            Confira alguns feedbacks de clientes que estão em busca 
            de soluções para manter seus estabelecimentos ativos e 
            saudáveis e contaram com a gente para isso!
          </>,
          modal: <ModalFour btnText={'VER MAIS'}/>
        }
      ]} />
      <Footer />
    </div>
  );
}

export default App;
