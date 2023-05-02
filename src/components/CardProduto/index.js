import { useHistory } from 'react-router-dom';

import { Card, ImgProd, Linha, Coluna, Coluna2, BtnLeft, BtnRight, Linha2, Linha3 } from "./cardProduto.styled";

import Text from '../Text';
import Space from '../Space';

const CardProduto = (props) => {
  const history = useHistory();

  return(
    <Card {...props}>
      <Linha md={6}>
        <Coluna onClick={() => history.push(`/`)}>
          <ImgProd src={props.image}/>
        </Coluna>

        <Linha3 onClick={() => history.push(`/`)}>
          <Space top={1} />
          <Text type={'h3'} size={24} color={'white'} style={{overflow:'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{props.titulo}</Text>

          <Space top={1} />
          <Text type={'p'} size={18} color={'white'} style={{overflow:'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{props.op1}</Text>

          <Space top={1} />
          <Text type={'p'} size={18} color={'white'} style={{overflow:'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{props.op2}</Text>

          <Space top={1} />
          <Text type={'p'} size={18} color={'white'} style={{overflow:'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{props.op3}</Text>
        </Linha3>
      </Linha>
    </Card>
  );
}

export default CardProduto;