import React, { useState, useEffect } from 'react'
import "./home.css"

import IMG1 from "../assets/ img1.jpg"
import IMG2 from "../assets/ img2.jpg"
import IMG3 from "../assets/ img3.jpg"
// import IMG4 from "../assets/ img4.jpg"


function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
         IMG1,
         IMG2,
         IMG3,
        //  IMG4,
    ];
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000); // Change the image every 3 seconds.
  
      return () => clearInterval(interval); // Clean up the interval when the component unmounts.
    }, [images.length]);

    
  return (
    <div className="slider-container">
      <div className="slider">
        <img
          className="slide-image"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        <div className="text-overlay">
          <h1>Welcome, Leon </h1>
          <h2> Get ready to embark on a journey of excitement and discovery as we bring you the best events in town, curated by top creators and organizers.  Let the fun begin!</h2>
          <div className='link'>
<a href="/About us" className="link">Click here to view more!</a>
</div>
        </div>
      </div>
    </div>
  )
}

export default Home;