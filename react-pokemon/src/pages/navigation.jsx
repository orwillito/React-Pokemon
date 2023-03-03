import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <div className="logo-container" to='/'>
        </div>
        <NavLink to='/'>Home</NavLink>
        <br/>
        <NavLink to='/devs'>Devs</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;