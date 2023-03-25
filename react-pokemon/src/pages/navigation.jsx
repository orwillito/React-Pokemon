import { NavLink, Outlet } from "react-router-dom";
import PokeLogo from "../assets/pokeball.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavTabs,
  Logo,
  LogoText,
  NavLinkStyle,
} from "../utils/ComponentsStylesheet";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo src={PokeLogo} />
          <LogoText>Choose your party!</LogoText>
        </LogoContainer>
        <NavTabs>
          <NavLink to="/">
            <NavLinkStyle style={{ textDecoration: "none" }}>Home</NavLinkStyle>
          </NavLink>
          <NavLink to="/devs">
            <NavLinkStyle style={{ textDecoration: "none" }}>Devs</NavLinkStyle>
          </NavLink>
        </NavTabs>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
