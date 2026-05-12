import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img src="/v2.jpg" alt="" height={'500px'} width={'100%'} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
        </div>
        <div>
        <img src="/v2.jpg" alt="" height={'500px'} width={'100%'} style={{ objectFit: 'cover', objectPosition: 'center' }}/>

        </div>
        
      </Slider>
    </div>
  );
}

export default Carousel;
