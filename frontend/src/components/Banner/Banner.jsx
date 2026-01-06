import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="title">
        <h3>Latest Trends</h3>
      </div>
      <div className="banner">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          speed={1000}
        >
          <div className="banner-outer">
            <SwiperSlide className="image image-1">
              <div className="text-content">
                <p>NEW SEASON</p>
                <h3>Shop for Latest trends in Fashion Season</h3>
                <span>
                  Don't miss the Opportunity
                  <i className="bx bx-right-top-arrow-circle"></i>
                </span>
              </div>
            </SwiperSlide>
          </div>

          <div className="banner-outer">
            <SwiperSlide className="image image-2">
              <div className="text-content">
                <p>NEW SEASON</p>
                <h3>Shop for Latest trends in Fashion Season</h3>
                <span>
                  Don't miss the Opportunity{" "}
                  <i className="bx bx-right-top-arrow-circle"></i>{" "}
                </span>
              </div>
            </SwiperSlide>
          </div>


          <div className="banner-outer">
            <SwiperSlide className="image image-3">
              <div className="text-content">
                <p>NEW SEASON</p>
                <h3>Shop for Latest trends in Fashion Season</h3>
                <span>
                  Don't miss the Opportunity{" "}
                  <i className="bx bx-right-top-arrow-circle"></i>{" "}
                </span>
              </div>
            </SwiperSlide>
          </div>
          <div className="banner-outer">
            <SwiperSlide className="image image-8">
              <div className="text-content">
                <p>NEW SEASON</p>
                <h3>Shop for Latest trends in Fashion Season</h3>
                <span>
                  Don't miss the Opportunity{" "}
                  <i className="bx bx-right-top-arrow-circle"></i>{" "}
                </span>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
