import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-16">
      <div className="md:w-full w-11/12 mx-auto">
        <SectionTitle
          subHeading="check it out"
          heading="Featured Item"
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center pb-20 pt-12 md:px-36 px-5">
        <div>
          <img className="rounded" src={featuredImg} alt="image" />
        </div>
        <div className="md:ml-10 md:mt-0 mt-3">
          <p>Aug 20, 2029</p>
          <p className="uppercase py-2">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            magni, consequuntur alias placeat dignissimos voluptas molestiae qui
            ipsa, ex illum amet delectus accusamus nam. Ex dolorem, maxime enim
            blanditiis quibusdam nam non ipsa saepe eos accusamus placeat
            voluptatibus distinctio rem.{" "}
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4 mt-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
