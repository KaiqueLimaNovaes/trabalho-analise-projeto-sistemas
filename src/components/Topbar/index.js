import { useHistory } from 'react-router-dom';

import { Container } from "react-bootstrap";
import { RowTopH, ColTopL, ColTopR } from "./topBar.styled";

import { IconContext } from "react-icons";
import { FaLock, FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const TopBar = () => {
    const history = useHistory();

    return(
      <Container fluid>
        <RowTopH>
            <ColTopL>
                <IconContext.Provider value={{ color: "#ffffff", size: "1.5em" }}>
                    <FaLock onClick={() => history.push(`/login`)} style={{paddingLeft: 10, cursor: 'pointer',}} />
                </IconContext.Provider>
            </ColTopL>

            <ColTopR>
                <IconContext.Provider value={{ color: "#ffffff", size: "1.8em" }}>
                    <FaWhatsappSquare onClick={() => window.open('https://api.whatsapp.com/send?phone=5511943209501')} style={{paddingLeft: 10, cursor: 'pointer',}} />
                    <FaFacebookSquare onClick={() => window.open('https://www.facebook.com/primeplanejad/')} style={{paddingLeft: 10, cursor: 'pointer',}} />
                    <FaInstagramSquare onClick={() => window.open('https://instagram.com/primeplanejadosoficial?utm_medium=copy_link')} style={{paddingLeft: 10, cursor: 'pointer',}} />
                </IconContext.Provider>
            </ColTopR>
        </RowTopH>
      </Container>
    );
}

export default TopBar;