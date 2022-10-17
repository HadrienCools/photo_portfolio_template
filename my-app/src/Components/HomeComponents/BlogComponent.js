import React from 'react'

export default function BlogComponent() {
  return (
    <div className="conainer-tm text-center">
    <div className="conainer">
    <div className="row">
    <div className="col-sm-6" style={{ marginTop: 10 }}>
        <div className="card">
            <img
                src="https://qph.fs.quoracdn.net/main-qimg-287ecb09c1fad8a45eeee0df4e8f0dd2.webp"
                //src="https://pixabay.com/get/54e6dc424b5bac14f6da8c7dda793679143fdaed50596c48702673d2974bc25eb9_1280.jpg"
                className="card-img-top"
                alt='...'
            />
            <div className="card-body">
                <h5 className="card-title custom-font">
                    5 Things To Keep In Mind When You're travelling
                </h5>
                <p className="card-text para">
                    Some quicjj example text to build on the card title and make up the bulk of yje cardés content. 
                </p>
                <a className="btn btn-custom" href="/">
                    Read More
                </a>
                </div>
            </div>
        </div>
        <div className="col-sm-6" style={{ marginTop:10}}>
            <div className="card">
                <img
                    src="https://qph.fs.quoracdn.net/main-qimg-287ecb09c1fad8a45eeee0df4e8f0dd2.webp"
                    className="card-img-top"
                    alt='...'
                    />
                    <h5 className="card-title custom-font">
                        5 Things To Keep In Mind When You're travelling
                    </h5>
                    <p className="card-text para">
                    Some quicjj example text to build on the card title and make up the bulk of yje cardés content. 
                </p>
                <a className="btn btn-custom" href="/">
                    Read More
                </a>
                </div>
            </div>
            
        </div>
        
    </div>
    </div>
  )
}
