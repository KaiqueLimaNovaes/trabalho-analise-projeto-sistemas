import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

export const Card = styled.div`
    width: ${({ width }) => width ? `${width}%` : '330px'};
    min-width: 200px;
    height: 380px;
    border-width: 2px !important;
    border-radius: 10px !important;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.primary.white} !important;
    cursor: pointer;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    padding: 0;
    &:hover{
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        //background-color: ${({ theme }) => theme.palette.primary.third} !important;
    }
    @media (max-width: 800px) {
      width: 90%;
      margin-bottom: 8px;
    }
`;

export const ImgProd = styled.img`
    max-width: 100%;
    min-width: 100%;
    height: 180px;
    object-fit: cover;
    margin-left: 0;
    margin-right: 0;
    border-radius: 10px 10px 0 0;
    @media (max-width: 800px) {
        width: 100%;
        min-width: 200px;
        height: 180px;
        margin-top: 0;
        border-radius: 10px 10px 0 0;
    }
`;

export const Friso = styled.div`
    width: ${({ width }) => width ? `${width}%` : '100px'};
    height: 1px;
    border-radius: ${({ border }) => border ? `${border}px` : 0};
    background-color: ${({ theme }) => theme.palette.primary.dark} !important;
   
`;

export const Linha = styled(Row)`
    height: 100%;
    margin: 0;
    padding: 0;
`;

export const Linha2 = styled(Row)`
    width: 100%;
    height: 20%;
    margin: 0;
    padding: 0;
`;

export const Linha3 = styled(Row)`
    width: 100%;
    height: 30%;
    margin: 0;
    padding: 0;
`;

export const Coluna = styled(Col)`
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 50%;
    padding: 0;
    margin: 0;
`;

export const Coluna2 = styled(Col)`
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;

export const BtnLeft = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0 0 0 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0;
    padding-top: 23px;
    &:hover{
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;
export const BtnRight = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0;
    padding-top: 23px;
    &:hover{
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;