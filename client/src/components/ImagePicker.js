// import { PromiseProvider } from "mongoose";
// import React, { useEffect, useState } from "react";
import React from "react";
// import imageAPI from "../utils/imageAPI"

function ImagePicker(props) {
    // const images = []
    // useEffect(() => {
    //     getData()
    // }, [])
    
    // const getData = () => {
    //     imageAPI.findAllImages()
    //     .then(res => console.log("hello"))
    //     .catch(err => console.warn(err))
    //     console.log("Got Here")
    // }
    
    
    const images = ["/chocolate.jpg", "/vanilla.jpg"]
    const handleChange = (e) => {
        const url = e.target.getAttribute("data-url")

        props.handleChange(url);
    }
    return (
        <div>
            {images.map((i) => (
            <img key={i} 
            src={i} 
            style={{
                height: "100px",
                border: props.selectedImage === i ? "solid 2px red" : "none"
            }} 
            onClick={handleChange}
            data-url={i}
            alt={i}
            />))}

        </div>
    )
}

export default ImagePicker;