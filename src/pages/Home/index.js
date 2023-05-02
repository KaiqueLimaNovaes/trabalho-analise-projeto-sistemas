import  {useState, useEffect} from 'react';
//import { useHistory } from 'react-router-dom';

import { Section1, ImgEx, RowTopH, ColTopL, ColTopR} from './home.styled';

import { Text, Space } from '../../components';

import Img1 from '../../assets/images/mao-cartao2.png'

const Home = () => {
  
    //const history = useHistory();
  
    return (
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
    )
  }
  
  export default Home