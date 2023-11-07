import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={`${
            activeRoute === "/" && "!text-[#D70F64] font-bold  !bg-inherit"
          }`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availablefoods"
          className={`${
            activeRoute === "/availablefoods" &&
            "!text-[#D70F64] font-bold  !bg-inherit"
          }`}
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addfood"
          className={`${
            activeRoute === "/addfood" &&
            "!text-[#D70F64] font-bold  !bg-inherit"
          }`}
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/managemyfoods"
          className={`${
            activeRoute === "/managemyfoods" &&
            "!text-[#D70F64] font-bold  !bg-inherit"
          }`}
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myfoodrequest"
          className={`${
            activeRoute === "/myfoodrequest" &&
            "!text-[#D70F64] font-bold  !bg-inherit"
          }`}
        >
          My Food Request
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="py-2 shadow-xl">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="" className="max-w-[60px] cursor-pointer mr-2" />
          <p className="text-lg lg:text-2xl font-semibold cursor-pointer">
            Share Eats
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <NavLink
                className="btn border-2 border-[#D70F64] bg-transparent text-[#D70F64] hover:bg-[#D70F64] hover:text-white px-8"
                onClick={handleLogOut}
              >
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn font-semibold bg-[#D70F64] text-white hover:border-2 hover:border-[#D70F64] hover:bg-transparent hover:text-[#D70F64] px-8 py-2"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
