import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../../assets/assets.js";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Review = () => {
  return (
    <div className="review">
      <div className="title">
        <h3>Customer Reviews</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          sapiente voluptatum, aliquid aliquam ratione perspiciatis sunt
          voluptatem numquam? Nostrum vero, ducimus sint eum placeat nemo
          praesentium ipsa
        </p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },


          768: {
            slidesPerView: 2,
          },

          867: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="text-content">
            <div className="top">
              <img src={assets.customer1} alt="" />
<<<<<<< HEAD
              <p className="review-name" >Richard </p>
=======
              <p>Richard </p>
>>>>>>> 27c609da820b76aff2dd055f7c3d3c1ceb3f3041
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis quidem autem quia omnis incidunt distinctio!
              </p>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-content">
            <div className="top">
              <img src={assets.customer2} alt="" />
<<<<<<< HEAD
              <p className="review-name" >Laura </p>
=======
              <p>Laura </p>
>>>>>>> 27c609da820b76aff2dd055f7c3d3c1ceb3f3041
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis quidem autem quia omnis incidunt distinctio!
              </p>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-content">
            <div className="top">
              <img src={assets.customer3} alt="" />
<<<<<<< HEAD
              <p className="review-name" >Rosie </p>
=======
              <p>Rosie </p>
>>>>>>> 27c609da820b76aff2dd055f7c3d3c1ceb3f3041
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis quidem autem quia omnis incidunt distinctio!
              </p>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-content">
            <div className="top">
              <img src={assets.customer4} alt="" />
<<<<<<< HEAD
              <p className="review-name" >Anne </p>
=======
              <p>Anne </p>
>>>>>>> 27c609da820b76aff2dd055f7c3d3c1ceb3f3041
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis quidem autem quia omnis incidunt distinctio!
              </p>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-content">
            <div className="top">
              <img src={assets.customer5} alt="" />
<<<<<<< HEAD
              <p className="review-name" >Jason </p>
=======
              <p>Jason </p>
>>>>>>> 27c609da820b76aff2dd055f7c3d3c1ceb3f3041
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis quidem autem quia omnis incidunt distinctio!
              </p>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-content">
            <div className="top">
              <img src={assets.customer6} alt="" />
<<<<<<< HEAD
              <p className="review-name" >Emilia </p>
=======
              <p>Emilia </p>
>>>>>>> 27c609da820b76aff2dd055f7c3d3c1ceb3f3041
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis quidem autem quia omnis incidunt distinctio!
              </p>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
