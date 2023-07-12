import React from 'react'
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsLinkedin, BsTiktok} from 'react-icons/bs'

const footer = () => {
  return <>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex align-items-center gap-30">
            <img src="images/newsletter.png" alt="newsletter" />
            <h2 className='text-white mb-0'>Sign up For a Newsletter</h2>
          </div>
        </div>
        <div className="col-7">
        <div className="input-group mb-0">
               <input type="text" className="form-control p-1"
                placeholder="Your Email address.."
                 aria-label="Your Email address.." aria-describedby="basic-addon2" />
              <span className="input-group-text fs-6 py-2" id="basic-addon2">Subscribe</span>
            </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h3 className='text-white mb-4'>Contact Us</h3>
          <div className='d-flex flex-column'>
            <address className='fs-5'>
              <a href="tel: 254 708118414" className="mt-4 text-white"> 254 708118414 <br />
              Naltex Street : emms Building <br />
              P.O Box : 18976
              </a> <br />

              <a href="mailto: machipoeclar@gmail.com" className="mt-4 text-white"> machipoeclar@gmail.com</a>
            </address>
          </div>

          <div className="social-links d-flex align-items-center gap-30">
              <Link className='fs-4 text-white mt-4 my-link'>
              <BsInstagram />
              </Link>
              <Link className='fs-4 text-white mt-4 my-link'>
              <BsTwitter />
              </Link>
              <Link className='fs-4 text-white mt-4 my-link'>
              <BsLinkedin />
              </Link>
              <Link className='fs-4 text-white mt-4 my-link'>
              <BsTiktok />
              </Link>
            </div>
        </div>
        <div className="col-3">
          <h3 className='text-white mb-4'>Information</h3>
          <div className='footer-links d-flex flex-column'>
          <Link className='text-white py-2 mb-2 my-link'>Privacy Policy</Link>
            <Link className='text-white py-2 mb-2 my-link'>Refund Policy</Link>
            <Link className='text-white py-2 mb-2 my-link'>Shipping Policy</Link>
            <Link to='about' className='text-white py-2 mb-2 my-link'>Blog</Link>
            <Link className='text-white py-2 mb-2 my-link'>Terms And Conditions</Link>
          </div>
        </div>
        <div className="col-3">
          <h3 className='text-white mb-4'>Account</h3>
          <div className='footer-links d-flex flex-column'>
          <Link to='about' className='text-white py-2 mb-2 my-link'>About Us</Link>
            <Link className='text-white py-2 mb-2 my-link'>Search</Link>
            <Link className='text-white py-2 mb-2 my-link'>Faq</Link>
            <Link className='text-white py-2 mb-2 my-link'>Contact</Link>
          </div>
        </div>
        <div className="col-2">
          <h3 className='text-white mb-4'>Quick Links</h3>
          <div className="footer-links d-flex flex-column">
            <Link className='text-white py-2 mb-2 my-link'>Laptops</Link>
            <Link className='text-white py-2 mb-2 my-link'>Headphones</Link>
            <Link className='text-white py-2 mb-2 my-link'>Tablets</Link>
            <Link className='text-white py-2 mb-2 my-link'>Watches</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Powered by emms Developers</p>
        </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer
