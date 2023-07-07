import { Link } from "react-router-dom";

const CashOrCard = () => {
  return (
    <div>
      <div className="flex flex-col w-11/12 mx-auto mt-10 border-opacity-50">
        <div className="grid h-20 card bg-base-100 rounded-box place-items-center">
          <Link to="/dashboard/cashPayment">
            <button className="btn btn-primary btn-sm">Cash Payment</button>
          </Link>
        </div>
        <div className="divider">OR</div>
        <div className="grid h-20 card bg-base-100 rounded-box place-items-center">
          <Link to="/dashboard/payment">
            <button className="btn btn-accent btn-sm">Card Payment</button>
          </Link>{" "}
        </div>
      </div>
      {/* <Link to="/dashboard/cashPayment">
        <button className="btn btn-warning btn-sm">Cash Payment</button>
      </Link>
      <Link to="/dashboard/payment">
        <button className="btn btn-warning btn-sm">Card Payment</button>
      </Link> */}
    </div>
  );
};

export default CashOrCard;
