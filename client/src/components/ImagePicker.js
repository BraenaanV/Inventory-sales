import { PromiseProvider } from "mongoose";
import React, { useState } from "react";

function ImagePicker(props) {
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
            />))}

        </div>
    )
}

export default ImagePicker;