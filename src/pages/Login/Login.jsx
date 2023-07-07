import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import img from "../../assets/authentication/login1.jpg";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccessMessage("Login Successfully !!!");
        setErrorMessage("");
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setSuccessMessage("");
      });
  };

  // const handleToggle = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <>
      <Helmet>
        <title>Online FoodHub | Login</title>
      </Helmet>
      <div>
        <div className="flex">
          <div className="md:w-1/2">
            <img className="min-h-screen" src={img} alt="image" />
          </div>
          <div className="md:w-1/2 flex items-center justify-center text-center">
            <div className="">
              <form onSubmit={handleLogin} className="mt-1 mb-1">
                <div className="mt-4">
                  <h1 className="text-3xl font-semibold">Welcome Back</h1>
                  <p className="text-2xl">Login to continue</p>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    // className="input input-bordered "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    // type={showPassword ? "text" : "password"}
                    type="password"
                    name="password"
                    placeholder="password"
                    // className="input input-bordered"
                  />
                  {/* <p
                  className="relative -top-12 left-80 text-gray-400"
                  // checked={showPassword}
                  onClick={handleToggle}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </p> */}
                  {successMessage && (
                    <p className="text-green-600 mb-2 text-center">
                      {successMessage}
                    </p>
                  )}
                  {errorMessage && (
                    <p className="text-red-600 mb-2 text-center">
                      {errorMessage}
                    </p>
                  )}
                  <div className="form-control mt-2">
                    <input
                      className="btn btn-error"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </div>
              </form>
              <div>
                <SocialLogin></SocialLogin>
                <p className="mt-5">
                  <small>
                    New Here? <Link to="/signup">Create an account</Link>{" "}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
