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
        ...settings
    };
    return (
        <Slider {...slideSettings}>
          {children}
        </Slider>
    );
};

export default SliderLayout;
