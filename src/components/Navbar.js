import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
const Logo = styled(Link)`
  ${NavLink}
`;
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 37px;
    width: 37px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: white;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/">Florrie's Home</Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((menu, index) => (
          <NavMenuLinks to={menu.link} key={index}>
            {menu.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/" primary="true">
          SEE Me
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
