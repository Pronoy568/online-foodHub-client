import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import profile from "../../../assets/others/profile.png";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-center text-center">
        <div>
          {/* <h1 className="text-center my-10 font-bold italic text-3xl md:text-4xl text-blue-900 underline decoration-blue-100 decoration-wavy underline-offset-8">
            Profile
          </h1>
          <div className="flex items-center justify-evenly text-center">
            <img
              //   className="rounded-full border-4 border-green-400"
              className="rounded-full border-8 w-1/5 object-fill"
              src={user ? user?.photoURL : profile}
              alt={user?.displayName}
            />
            <h1 className="text-xl my-5 font-semibold text-center">
              {user?.displayName}
            </h1>
          </div> */}
          <h1 className="text-center my-5 font-bold italic text-3xl md:text-4xl text-blue-900 underline decoration-blue-100 decoration-wavy underline-offset-8">
            Personal Information
          </h1>
          <div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="flex">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-11/12"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Nationality</span>
                </label>
                <input
                  type="text"
                  defaultValue="Bangladeshi"
                  className="input input-bordered w-11/12"
                />
              </div>
            </div>

            <div className="flex">
              <div>
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-11/12"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="input input-bordered w-11/12"
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <label className="label">
                  <span className="label-text">Current Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input input-bordered w-11/12"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input input-bordered w-11/12"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <input
                  className="btn btn-error w-11/12"
                  type="submit"
                  value="cancel"
                />
              </div>
              <div>
                <input
                  className="btn btn-success w-11/12"
                  type="submit"
                  value="Save"
                />
              </div>
            </div>
          </div>
          {/* <h1 className="text-3xl my-5 font-semibold text-center">
              {user?.displayName}
            </h1>
            <h1 className="text-3xl font-semibold text-center">
              {user?.email}
            </h1> */}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
