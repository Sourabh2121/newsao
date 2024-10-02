import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { EffectCards } from "swiper/modules"; // Correct import from swiper/modules

const ImageCarousel = () => {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/10.png",
    "/11.png",
    "/12.png",
  ];

  return (
    <div className="py-8">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
