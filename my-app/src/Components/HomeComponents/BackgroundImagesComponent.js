import React, {useEffect,useState} from 'react'

export default function BackgroundImagesComponent() {
    const [backgroundPhoto, setBackgroundPhoto] = useState("");

    let backgroundImg = "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg";
    useEffect(() => {
        let newCount;
        setInterval(()=>{
            newCount = Math.floor(Math.random()*11);
            fetch(
                'https://pixabay.com/api/?key=17104838-cd0577f218db33dae751d1f51&q=photographer&image_type=photo'
            )
            .then((res)=>res.json())
            .then((data)=> {
                // console.Log(newCount);
                setBackgroundPhoto(data.hits[newCount].largeImageURL);

            });
        }, 10000);
    }, [setBackgroundPhoto]);

    return (
    <div>
        {backgroundPhoto ? (
            <div
                style ={{ backgroundImage: "url(" +backgroundPhoto+")"}}
                className='bg'
                >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center custom-font-white">
                        <h2 style={{ marginTop: 150 }} className="bg-text">
                            "In photography there is a reality so subtle that"
                            <br /> it becomes more then reality."
                        </h2>
                        <h4 style={{marginTop: 50}} className='bg-text'>
                            {" "}
                            - Alfred Stieglitz
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        ):(
            <div
            style={{
                backgroundImage: "url(" + backgroundImg +")",
            }}
            className='bg'
            >
                <div className="container">
                    <div className ="row">
                        <div className="col-sm-12 text-center custom-font-white">
                            <h2 style={{ marginTop:150}} className='bg-text'>
                                "In photography there is a reality so subtle that"
                                <br /> it becomes more then reality."
                            </h2>   
                            <h4 style={{marginTop: 50}} className='bg-text'>
                            {" "}
                                - Alfred Stieglitz
                            </h4> 
                        </div>
                    </div>
                </div>
            </div>
            )}
        
    </div>
    );
}
