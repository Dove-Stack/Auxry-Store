import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="sub-newsletter">
            <h2>Recieve info on new Items, Deals, Sales and more....</h2>
            <span>We will email you a voucher worth of $30 off your first order over $180</span>
            <div className='newsletter-form'>
                <input type="email" name="" id="" /><button>Suscribe</button><br />
                <span>By suscribing you agree to our Terms & Conditions and Privacy & Cookies Policy</span>
            </div>
        </div>
        <div className="sub-newsletter">
          <h1>Need Help ? <br /> (+234) 7045 810 691</h1>
        </div>
    </div>
  )
}

export default Newsletter