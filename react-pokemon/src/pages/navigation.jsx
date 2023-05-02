import { NavLink, Outlet } from "react-router-dom";
import PokeLogo from "../assets/pokeball.svg";
import styled from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";

// import {
//   NavigationContainer,
//   LogoContainer,
//   NavTabs,
//   Logo,
//   LogoText,
//   NavLinkStyle,
// } from "../utils/ComponentsStylesheet";

const NavigationContainer = styled.div`
  width: 100vw;
  height: 6rem;
  display: flex;
  justify-content: space-evenly;
  background: #dc0a2d;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 2rem;
`;

const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 1.25rem;

  ${mediaQueries("laptop")`
   font-size: 1.5rem;
   font-weight: 400;
  `}

  ${mediaQueries("mobile")`
  font-size: 1rem;
    font-weight 300;
  `}
`;

const Logo = styled.img`
  width: 3.125rem;
  height: auto;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

const NavTabs = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const NavLinkStyle = styled.h2`
  text-decoration: none;
  color: white;
  padding-left: 1rem;
  margin: 1rem;
  align-items: center;
`;

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo src={PokeLogo} />
          <LogoText>Choose your party!</LogoText>
        </LogoContainer>
        <NavTabs>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <NavLinkStyle>Home</NavLinkStyle>
          </NavLink>
          <NavLink to="/devs" style={{ textDecoration: "none" }}>
            <NavLinkStyle>Devs</NavLinkStyle>
          </NavLink>
        </NavTabs>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
