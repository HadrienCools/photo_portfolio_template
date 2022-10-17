import React from 'react'
import HireImage from "../../assets/DSC01753.jpg"

export default function HireMeComponent() {
  return (
    <div className="container-bg">
    <div className="container">
        <div class='row text-center'>
        <div class='col-sm-6'>
            <img
                src={HireImage}
                className="img-fluid"
                width="300px"
                alt="Hire"
            />
            <h2 className="custom-font">Why Hire Me!</h2>

            </div>
            <div class="col-sm-6 fa-hire">
                <i className="fa fa-camera" style={{ fontSize: 50}}></i>
                <h4 className="custom-font">Professional Photography</h4>
                <p className='para'>
                    What is Lorem Ipsum is simply dummy text of thhe printing. What simply dummy text of the printing
                </p>
            </div>
            <div class ="col-sm-6 fa-hire">
                <i className="fa fa-camera-retro" style={{ fontSize: 50}}></i>
                <h4 className="custom-font">Quality Capture </h4>
                <p className='para'>
                    What is Lorem Ipsum is simply dummy text of thhe printing. What simply dummy text of the printing
                </p>
            </div>
            <div class ="col-sm-6 fa-hire">
                <i className="fa fa-video-camera" style={{ fontSize: 50}}></i>
                <h4 className="custom-font">Video & Filmography</h4>
                <p className='para'>
                    What is Lorem Ipsum is simply dummy text of thhe printing. What simply dummy text of the printing
                </p>
            </div>
        </div>
    </div>

    </div>
  )
}
