import styled from 'styled-components'
import { Row, Col } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';

export const Section1 = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.h2`
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  width: 40%;
  top: 70px;
  right: 30px;
  @media (max-width: 800px) {
    width: 80%;
    font-size: 45px;
  }
`;