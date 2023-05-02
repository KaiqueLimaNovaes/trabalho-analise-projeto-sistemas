import { Container } from "react-bootstrap";
import { RowTopH, ColTopL, ColTopR } from "./footer.styled";
import { Text, Space } from '../';

const Footer = () => {

    return(
      <Container fluid style={{padding: '0'}}>
        <RowTopH>
            <ColTopL md={12}>
                <Space top={3} />
                <Text type={'h2'} size={35} weight={'bold'} color={'dark'}>Análise e projeto de sistemas</Text>
                <Space top={2} />
                <Text type={'p'} size={24}>Kaique Lima Novaes - 27894126</Text>
                <Text type={'p'} size={24}>Matheus Magron - 1223456</Text>
                <Text type={'p'} size={24}>Gabriel Said - 123456</Text>
            </ColTopL>
        </RowTopH>
      </Container>
    );
}

export default Footer;