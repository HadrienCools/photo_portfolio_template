import React from 'react'
import Image from "../../assets/DSC01758.jpg"

export default function FormComponent() {
  return (
    <div
    className="container-tm container-bg"
    style ={{marginTop:15, paddingBOttom: 25}}>


<h1 className="custom-font text-center">STAY CONNECTED</h1>
<p className="text-center para">
    Some quick exemple text to build on the card title and make up the bulk of the card"s content. 
</p>
<div className="container">

<hr className="hr mx-auto" />
<div className="row">

<div className="col-sm-6">
<img src={Image} className="img-fluid" width="400px" alt="form" />
</div>

<div className="col-sm-6" style={{ marginTop:80}}>

<form>
<div className="mb-3">

<label for="name" className="form-label custom-font">
Name
</label>

<input type='text' className="form-control" id="name" />

</div>

<div className="mb-3">
<label for="email" className="form-label custom-font">
    Email adress
</label>

<input type='email' className="form-control" id="mail" />
    </div>

    <button type ="submit" classname="btn btn-custom">
        Subscribe
    </button>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}
