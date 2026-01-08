import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
      >
{/*         <SwiperSlide className="image-1 img-div">
          <span>WHERE FASHION MEETS PASSION.</span>
          <h2>Discover Our Exquisite Fashion Pieces</h2>
          <h4>Enjoy exclusive discounts on Every Purchase</h4>
          <button>SHOP NOW</button>
        </SwiperSlide>
 */}
        <SwiperSlide>
          <div className="img-div">
            <img
              src={require("../../assets/bg-video-01.jpg")}
              width="1920"
              height="950"
              alt="Hero"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              loading="eager"
              fetchpriority="high"
            />
            <span>WHERE FASHION MEETS PASSION.</span>
            <h2>Discover Our Exquisite Fashion Pieces</h2>
            <h4>Enjoy exclusive discounts on Every Purchase</h4>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="image-2 img-div">
          <span>ELEVATE YOUR FASHION GAME</span>
          <h2>Discover Elegance In Simplicity</h2>
          <h4>Up To 25% and More on every Purchase</h4>
          <button>SHOP NOW</button>
        </SwiperSlide>
        <SwiperSlide className="image-3 img-div">
          <span>SUSTAINABLE FASHION</span>
          <h2>Embrace Yourself and Define your Fashion</h2>
          <h4>Hurry !! , Don't miss out on Huge discount</h4>
          <button>SHOP NOW</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
