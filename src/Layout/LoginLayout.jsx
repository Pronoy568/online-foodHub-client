import { Outlet } from "react-router-dom";
// import Footer from "../pages/Shared/Footer/Footer";
// import LoginNavBar from "../pages/Shared/NavBar/LoginNavbar";

const LoginLayout = () => {

  return (
    <div>
      {/* {<LoginNavBar/>} */}
        <Outlet></Outlet>
      {/* {<Footer></Footer>} */}
    </div>
  );
};

export default LoginLayout;
