import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/blogCard'; 
import ProductCard from '../components/productcard'
import ProductCard1 from '../components/productcard1'
import SpecialProduct from '../components/specialproduct'
import Container from '../components/Container';


const home = () => {
  return <>
  <section className="home-wrapper-1 py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-6 position relative">
          <div className="main-banner">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="images/main-banner-1.jpg" className='img-fluid rounded-3 img' alt="banner" />

                  <div className="main-banner-content position-absolute">
                    <h4>
                      Supercharged For Pros
                    </h4>
                    <h5>Ipad 13+ Pro</h5>
                    <p>From $999 or <br /> $41.99 per month</p>
                    <Link className='button'>Buy Now</Link>
                  </div>
                </div>

                <div class="carousel-item">
                  <img src="images/main-banner.jpg" className='img-fluid rounded-3 img' alt="banner" />

                  <div className="main-banner-content position-absolute">
                    <h4>
                      True Wireless EarBuds
                    </h4>
                    <h5>Oraimo Riffs +</h5>
                    <p>From $999 or <br /> $41.99 per month</p>
                    <Link className='button'>Buy Now</Link>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>
                    Best Sale
                  </h4>
                  <h5>Laptop's Max</h5>
                  <p>From $999 or <br /> $41.99 per month</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>
                    New Arrival
                  </h4>
                  <h5>Buy AirPod +</h5>
                  <p>From $999 or <br /> $41.99 per month</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>
                    10% Off
                  </h4>
                  <h5>SmartWatch 7</h5>
                  <p>From $999 or <br /> $41.99 per month</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>
                    Free Engraving
                  </h4>
                  <h5>AirPods Max</h5>
                  <p>From $999 or <br /> $41.99 per month</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="home-wrapper-2 py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service.png" alt="services" />
              <div>
                <h6>Fast Delivery</h6>
                <p className='mb-0'>From all orders above $100</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-02.png" alt="services" />
              <div>
                <h6>Daily Suprise Offers</h6>
                <p className='mb-0'>Save upto 25%</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-03.png" alt="services" />
              <div>
                <h6>24/7 Support</h6>
                <p className='mb-0'>Shop with an expert</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-04.png" alt="services" />
              <div>
                <h6>Affordable Prices</h6>
                <p className='mb-0'>Get factory direct prices</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-05.png" alt="services" />
              <div>
                <h6>Secure Payments</h6>
                <p className='mb-0'>100% Protected Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="home-wrapper-2 py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="categories d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Cameras:</h6> <br />
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="categories" className='img' />
            </div>

            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Smart Tv:</h6> <br />
                <p>19 Items</p>
              </div>
              <img src="images/tv.jpg" alt="categories" className='img' />
            </div>

            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Smart Watches:</h6> <br />
                <p>36 Items</p>
              </div>
              <img src="images/headphone.jpg" alt="categories" className='img' />
            </div>

            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Music & Gaming:</h6> <br />
                <p>24 Items</p>
              </div>
              <img src="images/speaker.jpg" alt="categories" className='img' />
            </div>

            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Music & Gaming:</h6> <br />
                <p>24 Items</p>
              </div>
              <img src="images/speaker.jpg" alt="categories" className='img' />
            </div>

            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Cameras:</h6> <br />
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="categories" className='img' />
            </div>

            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Smart Tv:</h6> <br />
                <p>19 Items</p>
              </div>
              <img src="images/tv.jpg" alt="categories" className='img' />
            </div>

            <div>
              <div className='d-flex gap-30 align-items-center'>
                <h6>Smart Watches:</h6> <br />
                <p>36 Items</p>
              </div>
              <img src="images/headphone.jpg" alt="categories" className='img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="featured-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
            <h3 className='section-heading'>Our Featured Products</h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </section>

    <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className='text-white'>Big Screen</h5>
                <h6 className='text-white'>Smart Watch Series 7</h6>
                <p className='text-white'>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>


  <section className="special-wrapper home-wrapper-2 py-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
            <h3 className='section-heading'>Special Products</h3>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          
        </div>
        <div className="row py-5">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          
        </div>
      </div>
    </div>
  </section>

  <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
        </div>
      </Container>

  <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

  <section className="blog-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
            <h3 className='section-heading'>Latest Blogs</h3>
        </div>
        <BlogCard />
        
      </div>
    </div>
  </section>
  </>;
}

export default home
