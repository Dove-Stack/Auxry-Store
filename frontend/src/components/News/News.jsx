import React, { useContext } from "react";
import "./News.css";
import { StoreContext } from "../../context/StoreContext";

const News = () => {
  const { itemsArray } = useContext(StoreContext);

  const newsItem = itemsArray[3].news;

  return (
    <div className="news">
      <div className="news-title">
        <h2>Our Latest News</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, laborum
          aliquid tempora illo enim fuga dolorem, optio eum ab in placeat
          doloribus libero ad nobis.
        </p>
      </div>
      <div className="news-container">
        {newsItem.map((item, index) => {
          return (
            <div className="news-card" key={index}>
              {/* <> */}
              <div className="news-image">
                <img src={item.image} alt="" />
              </div>
              <div className="news-description">
                <p>{item.category} - 15, Oct. 2024</p>
                <h3>{item.header}</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  Eaque voluptatui aliquid tempora illo enim fuga dolorem.
                </span>
              </div>
              {/* </> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
