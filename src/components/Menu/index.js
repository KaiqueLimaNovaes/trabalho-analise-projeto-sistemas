//import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import { BarraMenu, NavMenu, ItensMenu, Toggle, ContMenu } from './menu.styled';

//import ImgLogo from '../../assets/images/logo_prime.png';

export const Menu = () => {

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