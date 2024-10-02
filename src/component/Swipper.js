import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules"; // Correct import from swiper/modules

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
        modules={[Autoplay, Pagination]} // Register modules here
        spaceBetween={60}
        slidesPerView={6}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className={`carousel-image ${
                index === Math.floor(images.length / 2) ? "zoom" : ""
              }`} // Zoom effect on the middle slide
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
