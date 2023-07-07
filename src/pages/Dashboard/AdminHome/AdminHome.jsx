import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center my-5 font-bold italic text-3xl md:text-4xl text-sky-900 underline decoration-blue-100 decoration-wavy underline-offset-8">
        Menu Information
      </h1>
      <div className="flex items-center justify-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">{stats.users}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Menu Items</div>
            <div className="stat-value">{stats.products}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats.orders}</div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex items-center justify-center text-center">
          <div>
            <h1 className="text-center my-10 font-bold italic text-4xl md:text-5xl text-blue-900 underline decoration-blue-100 decoration-wavy underline-offset-8">
              Profile
            </h1>
            <div className="flex items-center justify-center text-center">
              <img
                //   className="rounded-full border-4 border-green-400"
                className="rounded-full border-8 w-2/5 object-fill"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
            <h1 className="text-3xl my-5 font-semibold text-center">
              {user?.displayName}
            </h1>
            <h1 className="text-3xl font-semibold text-center">
              {user?.email}
            </h1>
          </div>
        </div>
      </div> */}
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

export default AdminHome;
