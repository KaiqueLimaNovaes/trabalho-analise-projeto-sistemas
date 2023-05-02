import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import styled from 'styled-components';

export const BarraMenu = styled(Navbar)`
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
    padding: 0;
`;

export const Title = styled.h1`
    margin: 7px;
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.text};
`;

export const NavMenu = styled(Navbar.Collapse)`
    justify-content: right;
    text-align: right;
    flex-grow: 0; 
`;

export const ItensMenu = styled(Nav.Link)`
    font-size: 20px;
    font-weight: bold;
    //padding: 0px;
    color: ${({ theme }) => theme.palette.primary.white} !important;
    text-decoration:none;
    border-radius: 15px;
    &:hover{
        color: ${({ theme }) => theme.palette.primary.dark} !important;
    }
`;

export const ItensMenuDrop = styled(NavDropdown)`
    font-size: 20px;
    font-weight: bold;
    //padding: 0px;
    color: ${({ theme }) => theme.palette.primary.text} !important;
    text-decoration:none;
    border-radius: 15px 15px 0 0;
    a {
        color: ${({ theme }) => theme.palette.primary.text} !important;
    }
    div.dropdown-menu {
        background-color: ${({ theme }) => theme.palette.primary.second};
        border-radius: 0 15px 15px 15px;
        border: none;
    }
    a.dropdown-item {
        &:hover{
            background-color: ${({ theme }) => theme.palette.primary.main};
        }
    }
    &:hover{
        a {
            color: ${({ theme }) => theme.palette.primary.second} !important;
        }
        a.dropdown-item {
            color: ${({ theme }) => theme.palette.primary.text} !important;
        }
    }
`;

export const Toggle = styled(Navbar.Toggle)`
    background-color: ${({ theme }) => theme.palette.primary.text} !important;
`;

export const ContMenu = styled(Container)`
    width: 100%;
`;

export const Logo = styled.img`
    height: 60px;
    max-width: 300px;
    max-height: 70px;
    padding-top: 2px;
    padding-bottom: 2px;
`;