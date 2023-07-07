import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useUser from "../../../hooks/useUser";
import { FaMapMarker } from "react-icons/fa";

const HomeNavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isUser] = useUser();
  const [cart] = useCart();
  const location = useLocation();

  const [address, setAddress] = useState("");
  const [addressShow, setAddressShow] = useState("enter address");
  const handleButtonClick = () => {
    if (address) {
      const newAddressText = `${address}`;
      setAddressShow(newAddressText);
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link className="-mx-1" to="/">Home</Link>
      </li>
      <li>
        <Link className="-mx-1" to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link className="-mx-1" to="/order/salad">Order Food</Link>
      </li>
      {user ? (
        isAdmin ? (
          <li>
            <Link to="/dashboard/adminhome">Dashboard</Link>
          </li>
        ) : (
          <li>
            <Link to="/dashboard/userhome">Dashboard</Link>
          </li>
        )
      ) : (
        <></>
      )}
      {isUser && location.pathname != '/' ? (
        <>
          {" "}
          <li>
            <Link to="/dashboard/mycart">
              <button className="btn gap-1">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">
                  +{cart?.length || 0}
                </div>
              </button>
            </Link>
          </li>
        </>
      ) : (
        <></>
      )}
      {user ? (
        <div className="flex justify-center items-center">
          <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            <img
              className="w-10 rounded-full"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          </div>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </div>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar items-center justify-evenly fixed z-10 bg-opacity-30 bg-black text-black md:text-white">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Online FoodHub</a>
        </div>
        <div>
          <div>
            <h1 className="inline-flex items-center">
              DELIVERING TO:{" "}
              <span className="mx-2">
                <FaMapMarker />
              </span>{" "}
              New address: {addressShow}
            </h1>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Enter your full address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button
                className="mb-5 bg-gray-500 text-white rounded text-center"
                onClick={handleButtonClick}
              >
                <span>&#8594;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">{navOptions}</ul> */}
          <ul className="menu menu-horizontal">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;
