import "./About.css";
import "boxicons/css/boxicons.min.css";
import { assets } from "../../assets/assets.js";
const About = () => {
  return (
    <div className="main-about">
      <div className="about-banner">
        <img src={`${assets.pic_about}`} alt="" />
        <div className="text-right">
          <p className="title">About Auxry Store</p>
          <span>
            This is a dummy header about the store. Please read and enjoy{" "}
          </span>
          <p className="body">
            Lorem ipsum, dolor sit amet consectetur adipisicing optio ratione
            voluptates quos quo esse?{" "}
          </p>
          <p className="body">
            Lorem ipsum, dolor sit amet consectetur adipisicing optio ratione
            voluptates quos quo esse?{" "}
          </p>
        </div>
      </div>

      <div className="content-about">
        <h4>Mission</h4>
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga reiciendis praesentium consectetur in libero, delectus eaque. Ea, sequi minus.</p> */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          dolorem. Distinctio quisquam placeat sequi corporis iste nemo
          repudiandae id dolor veritatis, dolorum aspernatur exercitationem
          expedita laborum magnam adipisci quos eius. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Reiciendis, dolorem. Distinctio
          quisquam placeat sequi corporis iste nemo repudiandae id dolor
          veritatis, dolorum aspernatur exercitationem expedita laborum magnam
          adipisci quos eius.

        
        </p>
        <div className="sub-content-about">
          <h4>Our Motto</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            incidunt similique, atque modi obcaecati exercitationem vel sequi
            nihil, error omnis inventore in odit distinctio magni? Possimus
            recusandae magnam tenetur reprehenderit!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            adipisci possimus corporis, repellendus blanditiis ipsam soluta,
            totam cupiditate quae inventore animi vitae aspernatur odio iusto
            reprehenderit maiores deleniti? Quod tempore natus ipsam cupiditate
            quibusdam!
          </p>
        </div>
      </div>

      <div className="icon-about">
        <i className="bx bx-phone"></i>
        <i className="bx bx-phone"></i>
        <i className="bx bx-phone"></i>
      </div>
    </div>
  );
};

export default About;
