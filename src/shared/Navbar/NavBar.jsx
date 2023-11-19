import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .the(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>
          <a>About</a>
        </li>
      </NavLink>
      {user?.email ? (
        <>
          <NavLink to={"/bookings"}>
            <li>
              <a>My Bookings</a>
            </li>
          </NavLink>
          <li onClick={handleLogOut}>
            <a>Log Out</a>
          </li>
        </>
      ) : (
        <NavLink to={"/login"}>
          <li>
            <a>Login</a>
          </li>
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-white fixed top-0 z-10  shadow-lg">
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
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-800 text-lg font-bold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-[#FF3811]">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
