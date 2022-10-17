import React from 'react'

export default function HeaderComponent() {
  return (
    <div className ="bg"
     style={{
        //backgroundImage:"url(https://pixabay.com/get/57e6d7444d52af14f6da8c7dda793679143fdaed50596c48702673d2964ec359b8_1280.jpg)"
        backgroundImage:"url( https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg)"
     }}>
        <div className="container">

        <div className="row">
            <div className="col-sm-12 text-center custom-font-white">
                <h2 style={{marginTop: 200}} className="bg-text"> About me</h2>
                <h4 className="custom-font">www.youtube.com</h4>
                <hr className="hr mx-auto"/>
        </div>
        </div>
    </div>
    </div>
  )
}
