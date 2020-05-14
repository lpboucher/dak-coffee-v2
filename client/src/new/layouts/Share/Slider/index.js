import React from 'react';
import Slider from "react-slick";

const SliderLayout = ({children, arrows, ...settings}) => {
    const slideSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: arrows ? arrows.next : null,
        prevArrow: arrows ? arrows.prev : null,
        cssEase: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        ...settings
    };
    return (
        <Slider {...slideSettings}>
          {children}
        </Slider>
    );
};

export default SliderLayout;
