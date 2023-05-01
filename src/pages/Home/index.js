import  {useState, useEffect} from 'react';
//import { useHistory } from 'react-router-dom';

import { Section1, Texto } from './home.styled';

const Home = () => {
    //const [produtos, setProdutos] = useState([]);
    const [banner, setBanner] = useState();
    const [cards, setCards] = useState();
    const [destaque1, setDestaque1] = useState([]);
    const [destaque2, setDestaque2] = useState([]);
    const [destaque3, setDestaque3] = useState([]);
    const [destaque4, setDestaque4] = useState([]);
    const [destaque5, setDestaque5] = useState([]);
  
    //const history = useHistory();
  
    return (
      <Section1>
        <Texto>Teste</Texto>
      </Section1>
    )
  }
  
  export default Home