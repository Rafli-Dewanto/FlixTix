import React from 'react';
import Carousel from 'nuka-carousel';

const CarouselComponent = () => {
  const images = [
    'https://cdn1-production-images-kly.akamaized.net/vOac7f7zaB2cG7yJN4wu2lUR004=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4320482/original/005045200_1676079674-WhatsApp_Image_2023-02-09_at_19.28.16.jpeg',
    'https://thecollision.org/wp-content/uploads/2023/06/4.png',
    'https://i0.wp.com/writertherapy.com/wp-content/uploads/2020/03/Joker-2019-Movie-banner-spread.jpg?fit=1024%2C576&ssl=1',
    'https://static.independent.co.uk/2023/04/07/18/Screen%20Shot%202023-04-07%20at%201.41.46%20PM.png?width=1200',
  ];

  return (
    <div className="w-full">
      <Carousel
        pauseOnHover={false}
        autoplayInterval={2200}
        style={{ minHeight: '200px' }}
        withoutControls={true}
        wrapAround={true}
        autoplay={true}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full h-full"
          >
            <img
              className="object-contain max-w-full max-h-full rounded-lg"
              src={image}
              alt={`Image ${i}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
