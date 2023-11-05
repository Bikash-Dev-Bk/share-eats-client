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
            activeRoute === "/" &&
            "!text-[#429FFD] font-bold underline !bg-inherit"
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
            "!text-[#429FFD] font-bold underline !bg-inherit"
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
            "!text-[#429FFD] font-bold underline !bg-inherit"
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
            "!text-[#429FFD] font-bold underline !bg-inherit"
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
            "!text-[#429FFD] font-bold underline !bg-inherit"
          }`}
        >
          My Food Request
        </NavLink>
      </li>

      {user?.uid ? (
        <>
          <li>
            <NavLink
              className="my-2 lg:my-0 !border-[#429FFD] !border-2 !bg-transparent !text-[#429FFD]  font-semibold "
              onClick={handleLogOut}
            >
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={`${
                activeRoute === "/login" &&
                "!text-[#429FFD] font-bold underline !bg-inherit"
              }`}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" top-0 z-50 shadow-xl">
      <div className="navbar max-w-7xl mx-auto">
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
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
