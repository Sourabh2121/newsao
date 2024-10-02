import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"4"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="10.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="12.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="7.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
