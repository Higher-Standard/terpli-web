import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#321F46' : '#321F46')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  margin-left: -120px;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    transition: 0.8s all ease;
    margin-left: 0px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #C2E531;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: 50px;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 10px;


`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
// position of navbar underline ^^ //

export const NavBtn = styled.nav`
  margin-top: 7%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #C2D670;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #C2E531;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 40px;
  background: #D0E678 !important;
  white-space: nowrap;
  padding: 10px 22px;
  color: #321F46 !important;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 50px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #C2E531 !important;
    color: #321F46 !important;
  }
`;
// sign up button text color ^ / background color
