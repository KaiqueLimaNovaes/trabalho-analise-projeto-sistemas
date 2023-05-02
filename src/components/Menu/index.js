import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import { BarraMenu, NavMenu, ItensMenu, Toggle, ContMenu, ItensMenuDrop, Logo } from './menu.styled';

//import ImgLogo from '../../assets/images/logo_prime.png';

export const Menu = () => {
  const [showC, setShowC] = useState(false);
  const showDropdownC = (e)=>{
      setShowC(!showC);
  }
  const hideDropdownC = e => {
      setShowC(false);
  }

  const [showD, setShowD] = useState(false);
  const showDropdownD = (e)=>{
    setShowD(!showD);
  }
  const hideDropdownD = e => {
      setShowD(false);
  }

  const [showE, setShowE] = useState(false);
  const showDropdownE = (e)=>{
    setShowE(!showE);
  }
  const hideDropdownE = e => {
      setShowE(false);
  }

  const [showJ, setShowJ] = useState(false);
  const showDropdownJ = (e)=>{
    setShowJ(!showJ);
  }
  const hideDropdownJ = e => {
      setShowJ(false);
  }

    const history = useHistory();
  
    return (
      <BarraMenu expand="lg">
        <ContMenu>
  
          <Toggle aria-controls="menu-topo">
          </Toggle>
  
          <NavMenu id="menu-topo">
            <Nav className="menu m-auto">

                <ItensMenu onClick={() => history.push(`/`)}>Inicio</ItensMenu>

                <ItensMenu onClick={() => history.push(`/`)}>Consultar pedido</ItensMenu>

            </Nav>
          </NavMenu>
  
        </ContMenu>
      </BarraMenu>
    );
};

export default Menu;