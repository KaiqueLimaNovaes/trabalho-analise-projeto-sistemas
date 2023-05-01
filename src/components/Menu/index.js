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
  
                <ItensMenuDrop title="Cozinha" show={showC} onMouseEnter={showDropdownC} onMouseLeave={hideDropdownC}>
                  <ItensMenuDrop.Item href="/produtos/cozinha/armarios/0/500/0/500/0/500">Armários</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/cozinha/modulados/0/500/0/500/0/500">Modulados</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/cozinha/mesas/0/500/0/500/0/500">Mesas</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/cozinha/cadeiras/0/500/0/500/0/500">Cadeiras</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/cozinha/diversos/0/500/0/500/0/500">Diversos</ItensMenuDrop.Item>
                </ItensMenuDrop>

                <ItensMenuDrop title="Dormitório" show={showD} onMouseEnter={showDropdownD} onMouseLeave={hideDropdownD}>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/roupeiros/0/500/0/500/0/500">Roupeiros</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/comodas/0/500/0/500/0/500">Cômodas</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/penteadeiras/0/500/0/500/0/500">Penteadeiras</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/camas/0/500/0/500/0/500">Camas</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/camaInfantil/0/500/0/500/0/500">Camas infantis</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/beliches/0/500/0/500/0/500">Beliches</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/aparadorDeCama/0/500/0/500/0/500">Aparador de cama</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/modulados/0/500/0/500/0/500">Modulados</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/cabeceiras/0/500/0/500/0/500">Cabeceiras</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/baus/0/500/0/500/0/500">Baús</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/sapateiras/0/500/0/500/0/500">Sapateiras</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/multiuso/0/500/0/500/0/500">Multiuso</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/dormitorio/colchoes/0/500/0/500/0/500">Colchões</ItensMenuDrop.Item>
                </ItensMenuDrop>

                <ItensMenuDrop title="Sala de estar" show={showE} onMouseEnter={showDropdownE} onMouseLeave={hideDropdownE}>
                  <ItensMenuDrop.Item href="/produtos/estar/sofas/0/500/0/500/0/500">Sofás</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/estar/poltronas/0/500/0/500/0/500">Poltronas</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/estar/racksEHomes/0/500/0/500/0/500">Racks e Homes</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/estar/aparadores/0/500/0/500/0/500">Aparadores</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/estar/mesasDeCentro/0/500/0/500/0/500">Mesas de centro</ItensMenuDrop.Item>
                </ItensMenuDrop>

                <ItensMenuDrop title="Sala de jantar" show={showJ} onMouseEnter={showDropdownJ} onMouseLeave={hideDropdownJ}>
                  <ItensMenuDrop.Item href="/produtos/jantar/mesas/0/500/0/500/0/500">Mesas</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/jantar/cadeiras/0/500/0/500/0/500">Cadeiras</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/jantar/buffets/0/500/0/500/0/500">Buffets</ItensMenuDrop.Item>
                  <ItensMenuDrop.Item href="/produtos/jantar/cristaleiras/0/500/0/500/0/500">Cristaleiras</ItensMenuDrop.Item>
                </ItensMenuDrop>

                <ItensMenu onClick={() => history.push(`/produtos`)}>Planejados</ItensMenu>

                <ItensMenu onClick={() => history.push(``)}>Seminovos</ItensMenu>

            </Nav>
          </NavMenu>
  
        </ContMenu>
      </BarraMenu>
    );
};

export default Menu;