import React, {useEffect,useState} from 'react'

export default function GalleryComponent() {
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        fetch(
            'https://pixabay.com/api/?key=17104838-cd0577f218db33dae751d1f51&q=city&image_type=photo&per_page=6'
        )
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.hits);
            setPhotos(data.hits);
        });
    },[setPhotos]);
    return (
        <div className='container-bg'>
            <div className='container-tm text-center'>
                <h1 className='custom-font'>
                    <span>
                        <i className='fa fa-photo'></i>
                        </span>{" "}
                    GalleryComponent
                </h1>
                <hr className="hr mx-auto" />
                <div class="conatiner">
                    <div class="row">
                        {photos.map((photo)=>(
                            <div class='col-sm-4' key={photo.id}>
                                <img
                                src={photo.largeImageURL}
                                className='img-fluid gallery-img'
                                alt="..."
                                />
                                </div>
                        ))}
        </div>
        <br />
        <a className='btn btn-custom' href="/">
            {" "}
            View More
            {" "}
        </a>

        </div>
        </div>
        </div>
    )
}
