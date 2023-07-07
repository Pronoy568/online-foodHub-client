import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Bistro from "../Bistro/Bistro";
import Famous from "../Famous/Famous";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Online FoodHub | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <Famous></Famous>
        <Bistro></Bistro>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
