import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className=" w-100"
          src="https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/sliders%2Fharsh-collection-home.jpg?alt=media&token=26126a58-1730-4f06-a7d9-5e6a427ca40d"
          alt="First slide"
        />
      
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100"
          src=" https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/sliders%2Fharsh-collection-web.jpg?alt=media&token=53c6178f-b090-4c88-938a-8e4bffc74c9e"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100"
          src="https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/sliders%2Fharsh-collection.jpg?alt=media&token=f38fbfc8-ec5a-4806-a9ff-9e16b0a13b8a"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;