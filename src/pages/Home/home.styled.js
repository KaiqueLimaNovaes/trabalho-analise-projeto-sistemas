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

export const ImgEx = styled.img`
  padding-left: 0px;
  width: 100%;
  height: 500px;
`;

export const RowTopH = styled(Row)`
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0;
`;

export const ColTopL = styled(Col)`
  text-align: left;
  padding: 0px;
`;

export const ColTopR = styled(Col)`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;