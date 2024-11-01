import React, { useEffect, useState } from 'react';

const Carasol = () => {
    const [index, setIndex] = useState(0);
    const images = [
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
      "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Adjust time in milliseconds
  
      return () => clearInterval(interval); // Clear on unmount
    }, [images.length]);
  
  
    return (
        <div className="md:w-2/5">
        <div className="carousel rounded-box w-96 h-80">
          {images.map((image, i) => (
            <div
              className={`carousel-item w-full ${i === index ? "block" : "hidden"}`}
              key={i}
            >
              <img src={image} className=" w-96 h-80" alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Carasol;