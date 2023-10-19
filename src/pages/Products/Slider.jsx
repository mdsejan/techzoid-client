import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Slider = ({ brand }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {brand.bannerImages.map((image) => (
          <SwiperSlide key={image}>
            <img
              className="w-full h-40 md:h-56 lg:h-80 object-cover"
              src={image}
              alt="slider img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
Slider.propTypes = {
  brand: PropTypes.object,
};

export default Slider;
