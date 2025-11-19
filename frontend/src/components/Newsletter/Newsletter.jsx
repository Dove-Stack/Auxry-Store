import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="sub-newsletter">
        <h2>Recieve info on new Items, Deals, Sales and more....</h2>
        <span>
          We will email you a voucher worth of $30 off your first order over
          $180
        </span>
        <div className="newsletter-form">
          <input type="email" name="" id="" placeholder="Enter your email address" />
          <button>Suscribe</button>
          <br />
          <span>
            By suscribing you agree to our Terms & Conditions and Privacy &
            Cookies Policy
          </span>
        </div>
      </div>
<<<<<<< HEAD
      <div className="sub-newsletter need-help">
=======
      <div className="sub-newsletter">
>>>>>>> 27c609da820b76aff2dd055f7c3d3c1ceb3f3041
        <h2>
          Need Help ? <br /> (+234) 7045 810 691
        </h2>
        <span>
          Our support team is here to assist you with any questions or concerns
          you may have. Whether you need help with your order, product
          information, or technical support, we're just a call away. Don't
          hesitate to reach out to us for prompt and friendly assistance.
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
