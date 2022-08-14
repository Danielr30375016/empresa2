import React from "react";
import '../style/Carousel_1.css';
import Slider from 'infinite-react-carousel';


export default function Carousel_1({images}){

  return (
    <>
    <div className="slider">
      <Slider className='slider_content' autoplay autoplaySpeed={2000} >
        {
          images.map(image => <div key={image.id} className="slider_content_item">
            <img className="slider_img"
                 src={image.image} 
                 alt={image.title}
                 />
            <p className="slider_description">{image.texto}</p>
          </div>)
        }
      </Slider>
    </div>
    </>
  );
}