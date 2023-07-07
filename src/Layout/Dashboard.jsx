import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import {
    RiLogoutCircleLine
} from "react-icons/ri";
import {
    MdFoodBank
} from "react-icons/md";
import {
    MdOutlineMenuBook
} from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const [cart] = useCart();
  const { logOut } = useContext(AuthContext);

  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  {" "}
                  <FaUtensils></FaUtensils> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu"> <MdOutlineMenuBook></MdOutlineMenuBook> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"> <MdFoodBank></MdFoodBank> Order Food</NavLink>
          </li>
          <li>
            <p onClick={handleLogOut} >
            <RiLogoutCircleLine></RiLogoutCircleLine>  LogOut
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
