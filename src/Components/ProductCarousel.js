import React from "react";
import Slider from "react-slick";

function ProductCarousel() {

  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <Slider {...settings}>

      {images.map((img, index) => (

        <div key={index}>

          <img
            src={img}
            alt=""
            className="carouselImage"
          />

        </div>

      ))}

    </Slider>

  );
}

export default ProductCarousel;