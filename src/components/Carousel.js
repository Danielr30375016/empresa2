import React, { useEffect, useState } from 'react';
import '../style/Carousel.css'



export default function Carousel (props){
  const [selectedIndex, setSelectIndex] = useState(0);
  const [selectedImage, setSelectImage] = useState(props.images[1]);
  var nombreClase = 'imagen_carousel';
  const [loaded, setLoaded] = useState(nombreClase);

  useEffect(() => {
    if(props.autoplay){
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images, true);
      }, 10000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next=true) => {
    setLoaded(false);
      const condition = next ? index < props.images.length - 1 : index > 0; 
      const nextIndex = next ? (condition ? index + 1 : 0) 
                              : condition ? index - 1 : props.images.length - 1;
      setSelectImage(props.images[nextIndex]);
      setSelectIndex(nextIndex);
  };

  const previus = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images, true);
    
  };


  return (
       <>
       <div className='container_carousel'>
        <img src={selectedImage} 
          alt='imagen' className={loaded} onLoad={() => {setLoaded('imagen_carousel_1')}} />
       </div>
       {props.boton ? 
       <div className='container_carousel_1'>
       <button  className='boton_izquierda' onClick={previus}>{'<'}</button>
       <button className='boton_derecha' onClick={next}>{'>'}</button>
      </div> : <></>}
      </>
  );
}