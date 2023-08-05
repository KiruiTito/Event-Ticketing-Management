import React, { useState, useEffect } from 'react'
import "./home.css"

import IMG1 from "../assets/ img1.jpg"
import IMG2 from "../assets/ img2.jpg"
import IMG3 from "../assets/ img3.jpg"
import IMG4 from "../assets/ img4.jpg"
 
function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
         IMG1,
         IMG2,
         IMG3,
         IMG4,
    ];
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000); // Change the image every 3 seconds.
  
      return () => clearInterval(interval); // Clean up the interval when the component unmounts.
    }, [images.length]);

    // const [searchText, setSearchText] = useState('');
  
    // const handleSearchClick = () => {
    //   onSearch(searchText); // Pass the searchText to the onSearch prop
    // };
  
  return (
    <div>
          
        <div className="slider">
        <div className='search_bar'>
        {/* <input
  className="search_input"
  type="text"
  placeholder="Search events by location"
  value={searchText}
  onChange={(event) => setSearchText(event.target.value)}
/>
<button className="search_button" onClick={handleSearchClick}>
  Search
</button> */}

        </div>
     
      <img
        className="slide-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
              
    </div>
    </div>
  )
}

export default Home