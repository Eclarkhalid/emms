import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import watch2 from "../images/watch-2.png";
import watch1 from "../images/watch-1.avif";


const productcard = () => {
  return (
    <div className="col-3 product">
        <Link className="product-card img position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src="images/wish.svg" alt="wishlist" />
                </Link>
            </div>
            <div className="product-image">
                <img src={watch2} alt="popular" className='img-fluid img-2' />
                <img src={watch1} alt="popular" className='img-fluid img-2' />
            </div>
            <div className="product-details">
                    <h6 className="brand">Apple</h6>
                    <h5 className="product-title">
                        Apple Series Watches
                    </h5>
                    <p className="price">130$</p>
                    <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15 align-items-center">
                            <Link>
                            <img src="images/add-cart.svg" alt="popular" className='img-circle' />
                            </Link>

                            <Link>
                            <img src="images/view.svg" alt="view" className='img-circle' />
                            </Link>

                            <Link>
                            <img src="images/prodcompare.svg" alt="compare" className='img-circle' />
                            </Link>
                        </div>
                    </div>
            </div>
        </Link>
    </div>
  )
}

export default productcard