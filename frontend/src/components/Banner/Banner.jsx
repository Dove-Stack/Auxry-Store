import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// const swiper = new Swiper ('.swiper-container', {
//   slidesPerView: 3,
//   breakpoints: {
//     768: {
//       slidesPerView: 2
//     }
//   }
// });

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
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          speed={1000}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          // modules={[Autoplay]}
        >
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
          <SwiperSlide className="image inner-swiper">
            {/* <div className="text-content">
              <p>NEW SEASON</p>
              <h3>Shop for Latest trends in Fashion Season</h3>
              <span>
                Don't miss the Opportunity{" "}
                <i className="bx bx-right-top-arrow-circle"></i>{" "}
              </span>
            </div> */}
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide className="image image-5">
                <div className="text-content">
                  <p>NEW SEASON</p>
                  <h3>Shop for Latest trends in Fashion Season</h3>
                  <span>
                    Don't miss the Opportunity{" "}
                    <i className="bx bx-right-top-arrow-circle"></i>{" "}
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide className="image image-7">
                <div className="text-content">
                  <p>NEW SEASON</p>
                  <h3>Shop for Latest trends in Fashion Season</h3>
                  <span>
                    Don't miss the Opportunity{" "}
                    <i className="bx bx-right-top-arrow-circle"></i>{" "}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="image image-4">
                <div className="text-content">
                  <p>NEW SEASON</p>
                  <h3>Shop for Latest trends in Fashion Season</h3>
                  <span>
                    Don't miss the Opportunity{" "}
                    <i className="bx bx-right-top-arrow-circle"></i>{" "}
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>

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
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
