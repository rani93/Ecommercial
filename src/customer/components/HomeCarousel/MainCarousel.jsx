import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};


// [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

const MainCarousel = () => {
    const items = MainCarouselData.map((item) =>
        <img role='presentation' key={item.id} className="object-cover w-[80%] h-[75vh] cursor-pointer mx-auto" src={item.image} alt="carousel" />
    );
    return (
        <AliceCarousel 
            items={items}
            disableButtonsControls={true}
            autoPlay
            autoPlayInterval={1500}
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
        />
    );
};

export default MainCarousel;