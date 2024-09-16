import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SlideTwo from "@public/assets/Hero/herotwo.svg";
import SlideThree from "@public/assets/Hero/herothree.svg";
import SlideFour from "@public/assets/Hero/herofour.svg";
import SlideOne from "@public/assets/Hero/heroone.svg";

export default function ReactSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // Adjust slider height based on image
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <Slider {...settings} className="w-full">
      <div className="flex justify-center items-center mx-auto max-w-full">
        <Image
          src={SlideOne}
          alt={SlideOne}
          className="object-contain md:mx-auto  "
        />
      </div>
      <div className="flex justify-center items-center mx-auto max-w-full">
        <Image
          src={SlideTwo}
          alt={SlideTwo}
          className="object-contain md:mx-auto  "
        />
      </div>
      <div className="flex justify-center items-center mx-auto max-w-full">
        <Image
          src={SlideThree}
          alt={SlideThree}
          className="object-contain md:mx-auto  "
        />
      </div>
      <div className="flex justify-center items-center mx-auto max-w-full">
        <Image
          src={SlideFour}
          alt={SlideFour}
          className="object-contain md:mx-auto  "
        />
      </div>
    </Slider>
  );
}
