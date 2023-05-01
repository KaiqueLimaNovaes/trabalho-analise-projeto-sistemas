import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

export const RowTopH = styled(Row)`
  height: 30px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const ColTopL = styled(Col)`
  text-align: left;
`;

export const ColTopR = styled(Col)`
  text-align: right;
`;