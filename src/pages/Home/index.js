import  {useState, useEffect} from 'react';
//import { useHistory } from 'react-router-dom';

import { Section, Section1, Section2, ImgEx, ImgEx2, RowTopH, RowTopH2, ColTopL, ColTopR} from './home.styled';

import { Text, Space, CardProduto } from '../../components';

import Img1 from '../../assets/images/mao-cartao2.png'
import Img2 from '../../assets/images/vip.jpg'

const Home = () => {
  
    //const history = useHistory();
  
    return (
      <Section>
        <Space top={2} />

        <Section1>
          <RowTopH>
              <ColTopL md={8}>
                <ImgEx src={Img1} alt="" />
              </ColTopL>

              <ColTopR md={4}>
                <Text type={'p'} size={60} color={'white'}>O cartão perfeito para o seu estilo!</Text>
              </ColTopR>
          </RowTopH>
        </Section1>

        <Space top={5} />

        <Section2>
          <RowTopH>
              <ColTopL md={6}>
                <Text type={'h2'} size={40} color={'white'}>Acumule pontos nos principais programas de milhagem</Text>
                <Space top={3} />
                <Text type={'p'} size={25} color={'white'}>Com o cartão XXXXX você pode acumular até 1 ponto por real gasto e trocar por beneficios incriveis e tenha acesso a mais de 100 salas vips em aeroportos pelo mundo.</Text>
              </ColTopL>

              <ColTopR md={6}>
                <ImgEx2 src={Img2} alt="" />
              </ColTopR>
          </RowTopH>
        </Section2>

        <Space top={5} />

        <Section1>
          <RowTopH>
            <Text type={'h2'} size={40} color={'white'}>Confira as soluções pensadas para você</Text>
          </RowTopH>

          <Space top={3} />

          <RowTopH2>
            <CardProduto titulo={'XXXX Black'} op1={'- Renda: R$20.000,00'} op2={'- Anuidade: 12 x R$85'} op3={'- Acesso ilimitado a sala vip'} />

            <CardProduto titulo={'XXXX Platinum'} op1={'- Renda: R$8.000,00'} op2={'- Anuidade: 12 x R$40'} op3={'- Cashback em lojas parceiras'} />

            <CardProduto titulo={'XXXX Internacional'} op1={'- Renda: R$2.000,00'} op2={'- Anuidade: Gratis'} op3={'- Cashback em lojas parceiras'} />
          </RowTopH2>
        </Section1>

        <Space top={5} />
      </Section>
    )
  }
  
  export default Home