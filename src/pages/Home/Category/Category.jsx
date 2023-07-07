import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="md:w-full w-11/12 mx-auto">
      <SectionTitle
        subHeading={"Should try"}
        heading={"Food Item"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="image1" />
          <h3 className="md:text-4xl text-center uppercase md:-mt-16 md:text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="image2" />
          <h3 className="md:text-4xl text-center uppercase md:-mt-16 md:text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="image3" />
          <h3 className="md:text-4xl text-center uppercase md:-mt-16 md:text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="image4" />
          <h3 className="md:text-4xl text-center uppercase md:-mt-16 md:text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="image5" />
          <h3 className="text-4xl text-center uppercase mt-3 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
