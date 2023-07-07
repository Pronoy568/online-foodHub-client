import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import { Link } from "react-router-dom";

const Famous = () => {
  return (
    <main className="pb-5 w-11/12 mx-auto">
      <div>
        <SectionTitle
          heading="Famous Item"
          subHeading="Should Try"
        ></SectionTitle>
      </div>
      <section className="flex justify-center items-center">
        <div className="p-5 grid md:grid-cols-3 grid-cols-1 gap-12">
          <div className="w-80 bg-base-200 shadow-xl rounded-xl">
            <figure>
              <img
                className="w-[400px] h-[230px] rounded-xl"
                src={image1}
                alt="image1"
              />
            </figure>
            <div className="py-6 px-3">
              <h2 className="text-2xl font-semibold">Caeser Salad</h2>
              <p className="pt-3">
                Lettuce, Eggs, Parmesan Cheese, <br /> Breast Fillets.{" "}
              </p>
              <p>
                Price:{" "}
                <span className="text-yellow-500">$ 15</span>
              </p>
            </div>
          </div>
          <div className="w-80 bg-base-200 shadow-xl rounded-xl">
            <figure>
              <img
                className="w-[400px] h-[230px] rounded-xl"
                src={image2}
                alt="image2"
              />
            </figure>
            <div className="py-6 px-3">
              <h2 className="text-2xl font-semibold">Pizza Biz</h2>
              <p className="pt-3">
                Tomato, Chicken, Cheese, Bread, <br /> green vegetables.{" "}
              </p>
              <p>
                Price:{" "}
                <span className="text-yellow-500">$ 12</span>
              </p>
            </div>
          </div>
          <div className="w-80 bg-base-200 shadow-xl rounded-xl">
            <figure>
              <img
                className="w-[400px] h-[230px] rounded-xl"
                src={image3}
                alt="image3"
              />
            </figure>
            <div className="py-6 px-3">
              <h2 className="text-2xl font-semibold">Egg Soup</h2>
              <p className="pt-3">
                Cheese, Eggs, Parmesan Bread, <br /> Tasty Souses.{" "}
              </p>
              <p>
                Price:{" "}
                <span className="text-yellow-500">$ 17</span>
              </p>
            </div>
          </div>
        </div>

      </section>
      <div className="text-center">
        <Link to="/menu">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Famous;
