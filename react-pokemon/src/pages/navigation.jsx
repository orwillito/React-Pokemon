import { NavLink, Outlet } from "react-router-dom";
import PokeLogo from "../assets/pokeball.png";

import {
  NavigationContainer,
  LogoContainer,
  NavTabs,
  Logo,
} from "../utils/ComponentsStylesheet";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo src={PokeLogo} />
          Choose your party!
        </LogoContainer>
        <NavTabs>
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </NavLink>
          <NavLink
            to="/devs"
            style={{
              textDecoration: "none",
              color: "white",
              paddingLeft: "1rem",
            }}
          >
            Devs
          </NavLink>
        </NavTabs>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
