import { colors } from "@mui/material";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
       
        
    };
    return (
        <Slider {...settings}>
            <div>
                <img style={{ width: "100%", height: "380px", marginTop: "30px" }} src="https://tastee.in/wp-content/uploads/2024/02/papaya-seeds-1024x576.png" alt="" />
         </div>
            <div>
                <img style={{ width: "100%", height: "380px", marginTop: "30px" }} src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" alt=""/> 
            </div>
            <div>
                <img style={{ width: "100%", height: "380px", marginTop: "30px" }} src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="" />   
            </div>
            <div>
                <img style={{ width: "100%", height: "380px", marginTop: "30px" }} src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" alt="" />  
            </div>
            <div>
                <img style={{ width: "100%", height: "380px", marginTop: "30px" }} src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg" alt="" />  
            </div>
            
           
        </Slider>
    );
}