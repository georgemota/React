import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// Tell webpack this JS file uses this imag
export const ImageCarousel = ({images}) => {
  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
  return ( 
    <>
      <section className='flex-container'>
            <div className='img'>
                <img src='..\images\logo.jpg'/>
                <img src='..\images\logo2.jpg'/>
                <img src='..\images\logo3.jpg'/>
                <img src='..\images\logo4.jpg'/>
                <img src='..\images\logo5.jpg'/>
                <img src='..\images\logo6.jpg'/>
                <img src='..\images\logo7.jpg'/>
                <img src='..\images\logo8.jpeg'/>
                <img src='..\images\logo9.jpeg'/>
                <img src='..\images\logo10.jpeg'/>
                <img src='..\images\logo11.jpeg'/>
            </div>   
      </section>
    </>     
  )
}

export default ImageCarousel;