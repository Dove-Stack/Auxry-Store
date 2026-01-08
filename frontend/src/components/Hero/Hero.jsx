/* import React from "react";
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
        <SwiperSlide className="image-1 img-div">
          <span>WHERE FASHION MEETS PASSION.</span>
          <h2>Discover Our Exquisite Fashion Pieces</h2>
          <h4>Enjoy exclusive discounts on Every Purchase</h4>
          <button>SHOP NOW</button>
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
 */



// src/components/Hero/Hero.jsx  (adjust path to where your file actually is)
import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Import images the Vite way (ESM)
import heroImg1 from "../../assets/bg-video-01.jpg";
import heroImg2 from "../../assets/Hero/portrait.jpg";
import heroImg3 from "../../assets/woman.jpg";

const heroSlides = [
  {
    id: 1,
    img: heroImg1,
    span: "WHERE FASHION MEETS PASSION.",
    h2: "Discover Our Exquisite Fashion Pieces",
    h4: "Enjoy exclusive discounts on Every Purchase",
    button: "SHOP NOW",
  },
  {
    id: 2,
    background: heroImg2,
    span: "ELEVATE YOUR FASHION GAME",
    h2: "Discover Elegance In Simplicity",
    h4: "Up To 25% and More on every Purchase",
    button: "SHOP NOW",
  },
  {
    id: 3,
    background: heroImg3,
    span: "SUSTAINABLE FASHION",
    h2: "Embrace Yourself and Define your Fashion",
    h4: "Hurry !! , Don't miss out on Huge discount",
    button: "SHOP NOW",
  },
];

const Hero = () => {
  return (
    <div className="hero-section" role="region" aria-label="Homepage hero">
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
        {heroSlides.map((slide, index) => {
          // For slides 2+ we set background via inline style so Vite resolves the asset
          const inlineStyle =
            index !== 0 && slide.background
              ? {
                  backgroundImage: `linear-gradient(to bottom left, rgba(0,0,0,0.24), rgba(218,218,218,0.7)), url(${slide.background})`,
                }
              : {};

          return (
            <SwiperSlide
              key={slide.id}
              className={`img-div ${index === 0 ? "first-slide" : `image-${slide.id}`}`}
              style={inlineStyle}
            >
              {/* First slide uses an <img> so browser treats it as a real image resource (better for LCP) */}
              {index === 0 && (
                <img
                  src={slide.img}
                  alt={slide.h2}
                  className="first-slide-img"
                  width="1920"
                  height="950"
                  loading="eager"
                  fetchpriority="high"
                />
              )}

              {/* Content overlay */}
              <span className="hero-kicker">{slide.span}</span>
              <h2 className="hero-title">{slide.h2}</h2>
              <h4 className="hero-sub">{slide.h4}</h4>
              <button className="hero-cta" aria-label="Shop now">
                {slide.button}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
