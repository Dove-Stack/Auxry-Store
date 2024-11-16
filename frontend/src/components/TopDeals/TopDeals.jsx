import React, { useContext } from "react";
import "./TopDeals.css";
import { StoreContext } from "../../context/StoreContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import { assets } from "../../assets/assets";

const TopDeals = () => {
  const { TopDealList, itemsArray } = useContext(StoreContext);

  return (
    <div className="top-deals">
      <div className="title">
        <h3>Top Deals</h3>
      </div>

      <div className="deals-wrapper">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            475: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            867: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2,
          //   },
          //   768: {
          //     slidesPerView: 3,
          //   },
          //   1024: {
          //     slidesPerView: 3,
          //   },
          // }}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {itemsArray[2].topdeals.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="deals-card">
                  <div className="deal-percent">- {item.percent}%</div>
                  <img src={item.image} alt="" />
                  <div className="deal-price">
                    <h4>{item.name}</h4>
                    <span className="sale-price">${item.salePrice}</span>
                    <span className="list-price">${item.listPrice}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopDeals;
