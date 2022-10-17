import React from 'react'

export default function ParallaxComponent() {
  return (
    <div className='parallax'>
    <div className='container'>
        <h3
        className="custom-font-white text-center"
        style={{ paddingTop: "150px" }}
        >
        <span>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
        </span>
        <br />
        <br />
        'One of the best photographer who captured news & showed us the real world.'
        </h3>
        <br />
        <br />
        <h4 className='custom-font-white text-center'>
            <span>
                <img src="https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png"
                className="img-fluid"
                width="80px"
                alt="..."
                />
                </span>
                <br /> - The News articles
                </h4>
                
    </div>
    </div>
  )
}
