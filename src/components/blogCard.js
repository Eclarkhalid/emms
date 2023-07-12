import React from 'react'
import { Link } from 'react-router-dom';

const blogCard = () => {
  return <>
  <div className="col-3">
    <div className="card blog-card">
        <div className="card-image">
            <img src="images/blog-1.jpg" alt="blog" className='img-fluid' />
            <div className="blog-content">
                <p className="date">7-4-2023</p>
                <h5 className="tittle">Best morning experience.</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Labore, esse officia. Modi odit similique optio delectus nihil ut reiciendis nulla impedit? 
                 !</p>
                <Link className="button">Read More</Link>
            </div>
        </div>
    </div>
  </div>

  <div className="col-3">
    <div className="card blog-card">
        <div className="card-image">
            <img src="images/blog-2.jpg" alt="blog" className='img-fluid' />
            <div className="blog-content">
                <p className="date">7-4-2023</p>
                <h5 className="tittle">Out of space adventure</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Labore, esse officia. Modi odit similique optio delectus nihil ut reiciendis nulla impedit? 
                 !</p>
                <Link className="button">Read More</Link>
            </div>
        </div>
    </div>
  </div>

  <div className="col-3">
    <div className="card blog-card">
        <div className="card-image">
            <img src="images/blog-3.jpg" alt="blog" className='img-fluid' />
            <div className="blog-content">
                <p className="date">7-4-2023</p>
                <h5 className="tittle">New revolution.</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Labore, esse officia. Modi odit similique optio delectus nihil ut reiciendis nulla impedit? 
                 !</p>
                <Link className="button">Read More</Link>
            </div>
        </div>
    </div>
  </div>

  <div className="col-3">
    <div className="card blog-card">
        <div className="card-image">
            <img src="images/blog-4.jpg" alt="blog" className='img-fluid' />
            <div className="blog-content">
                <p className="date">7-4-2023</p>
                <h5 className="tittle">Sunset view updated</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Labore, esse officia. Modi odit similique optio delectus nihil ut reiciendis nulla impedit? 
                 !</p>
                <Link className="button">Read More</Link>
            </div>
        </div>
    </div>
  </div>
  </>;
}

export default blogCard