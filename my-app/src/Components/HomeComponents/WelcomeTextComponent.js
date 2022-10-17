import React from 'react'
import WelcomeImage from "../../assets/DSC01750.jpg"

export default function WelcomeTextComponent() {
    return (
    <div
    className="container conatiner-tm text-center"
    style={{ paddingBottom: 15 }}
    >
        <img
        src={WelcomeImage}
        className="img-fluid"
        width="400px"
        alt="WelcomeImage"
        />
        <h1 className='custom-font' style={{ marginTop:"50px" }}>
            LET ME CAPTURE YOUR DREAM
        </h1>
        <p className="para">
            What is lorem ipsum is sipmly dummy text of the printing and typesetting industry.
        </p>
        <hr className='mx-auto hr' />
        <a className="btn btn-custom" href="/">
            {" "}
            Hire Now {" "}
        </a>
    </div>
    )
}
