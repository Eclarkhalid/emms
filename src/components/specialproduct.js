import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const specialproduct = () => {
  return (
    <div className="col-4">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div className='col-6'>
                    <img src="images/watch.jpg" alt="special products" className="img-fluid" />
                </div>
                <div className="special-product-content col-6 mb-3">
                    <h5 className="brand">
                        emms
                    </h5>
                    <h6 className="tittle">
                     Resistant Logo Watch
                    </h6>
                    <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className="price"><span className="red">100$</span>&nbsp; <strike>200$</strike></p>
                    <div className="discount-till d-flex align-items-center gap-10 my-3 mb-3">
                        <p className="mb-0"><b>5</b> days</p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rounded-circle p-3 bg-danger">1</span>
                            <span className="badge rounded-circle p-3 bg-danger">1</span>
                            <span className="badge rounded-circle p-3 bg-danger">1</span>
                        </div>
                    </div>
                    

                    <div className="prod-count my-3 mb-3">
                            <p>Products : 10</p>
                        </div>

                    <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{"width":"60%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <Link className='button mt-4 mb-3'>
                     Add to Cart
                     </Link>
                </div>
            </div>

            
        </div>
    </div>

    
  )
}

export default specialproduct