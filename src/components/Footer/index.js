import { Container } from "react-bootstrap";
import { RowTopH, ColTopL, ColTopR } from "./footer.styled";
import { Text, Space } from '../';

const Footer = () => {

    return(
      <Container fluid style={{padding: '0'}}>
        <RowTopH>
            <ColTopL md={6}>
                <Space top={3} />
                <Text type={'h2'} size={35} weight={'bold'} color={'dark'}>Prime planejados</Text>
                <Space top={2} />
                <Text type={'p'} size={24}>Av. Brigadeiro Faria Lima nº3158, Cocaia, Guarulhos</Text>
                <Space top={2} />
                <Text type={'p'} size={24}>11 2401-8144</Text>
                <Text type={'p'} size={24}>11 94320-9501</Text>
                <Space top={2} />
                <Text type={'p'} size={24}>Seg à Sab - das 09:00 às 19:00</Text>
                <Space top={2} />
            </ColTopL>

            <ColTopR md={6}>
                <iframe title="mapa" src="https://www.google.com/maps/d/embed?mid=1RBcOm0IU7UARvMaX1jJLUTBtPtnwjz3O" width="100%" height="340px" frameBorder="0" scrolling="no"></iframe>
            </ColTopR>
        </RowTopH>
      </Container>
    );
}

export default Footer;