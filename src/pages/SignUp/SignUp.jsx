import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import img from "../../assets/authentication/register1.jpg";

const SignUp = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              role: "user",
            };
            fetch("https://online-foodhub-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setSuccessMessage("Login Successfully !!!");
                  setErrorMessage("");
                  navigate("/");
                }
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
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
        <title>Online FoodHub | Sign Up</title>
      </Helmet>
      <div>
        <div className="flex">
          <div className="md:w-1/2">
            <img className="min-h-full" src={img} alt="image" />
          </div>
          <div className="md:w-1/2 flex items-center justify-center text-center">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="mt-1 mb-1">
                <div className="mt-4">
                  <h1 className="text-3xl font-semibold">Welcome Back</h1>
                  <p className="text-2xl">Sign up to continue</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="First Name"
                    // className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">First Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    // className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    // className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    // type={showPassword ? "text" : "password"}
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    placeholder="password"
                    // className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                </div>
                {/* <p
                  className="relative -top-12 left-80 text-gray-400"
                  onClick={handleToggle}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </p> */}
                {successMessage && (
                  <p className="text-green-600 mb-2">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-600 mb-2">{errorMessage}</p>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    // className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control mt-2">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <div>
                <SocialLogin></SocialLogin>
                <p className="my-5">
                  <small>
                    Already have an account <Link to="/login">Login</Link>
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

export default SignUp;
