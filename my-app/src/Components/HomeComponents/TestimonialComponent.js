import React from 'react'

export default function TestimonialComponent() {
    return (
        <div className="container-tm conainer-bg text-center">
            <h1 className="custom-font">
                <span>
                    <i className="fa fa-quote-left"></i>
                </span>{" "}
                TESTIMONIALS
            </h1>
            <hr className="hr mx-auto" />
            <div
                id="carouselExempleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to='1'></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to='2'></li>
                </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div 
                                className="bg"
                                style={{
                                // backgroundImage:"url(https://www.energystar.gov/sites/default/files/pexels-photo-326278_banner.jpg)",
                                backgroundImage:"url(https://cdn.pixabay.com/photo/2019/04/13/14/33/indian-wedding-4124753_960_720.jpg)",
                                }}
                            >
                            <div className='container'>
                            <h3
                            className="custom-font-white text-center"
                            style={{paddingTop: "150px"}}
                            >
                                <span>
                                    <i className="fa fa-quote-left fa-2x"></i>
                                </span>
                                <br />
                                <br />
    "One of the best photograper who captured news & showed us the real world "
                                </h3>
                                <br />
                                <hr className="hr mx-auto" />
                                <h4 className="custom-font-white text-center">
                                    <span>
                                        <img
                                        src='https://i.imgur.com/I80W1Q0.png'
                                        className="img-fluid"
                                        width='50px'
                                        alt='...'
                                        />
                                        </span>{" "}
                                        John Doe
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            
                    <div className="carousel-item ">
                        <div className="bg"
                        style={{
                            //backgroundImage:"url(https://cdn.pixabay.com/photo/2016/02/19/09/59/taj-mahal-1209004_960_720.jpg)",
                            backgroundImage:"url(https://cdn.pixabay.com/photo/2019/04/13/14/33/indian-wedding-4124753_960_720.jpg)",
                            
                        }}
                    >
                        <div className='container'>
                            <h3
                            className="custom-font-white text-center"
                            style={{paddingTop: "150px"}}
                            >
                                <span>
                                    <i className="fa fa-quote-left fa-2x"></i>
                                </span>
                                <br />
                                <br />
                                "One of the best photograper who captured news & showed us the real world "
                                </h3>
                                <br />
                                <hr className="hr mx-auto" />
                                <h4 className="custom-font-white text-center">
                                    <span>
                                        <img
                                        src='https://i.imgur.com/I80W1Q0.png'
                                        className="img-fluid"
                                        width='50px'
                                        alt='...'
                                        />
                                        </span>{" "}
                                        John Doe
                                        </h4>
                                    </div>
                                </div>
                            </div>


                            </div>
                            </div>
                        


        </div>
    )
}
