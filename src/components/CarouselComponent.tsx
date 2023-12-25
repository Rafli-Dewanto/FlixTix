import React, { Suspense } from 'react';
import Carousel from 'nuka-carousel';

const CarouselComponent = () => {
  const images = [
    'https://cdn1-production-images-kly.akamaized.net/vOac7f7zaB2cG7yJN4wu2lUR004=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4320482/original/005045200_1676079674-WhatsApp_Image_2023-02-09_at_19.28.16.jpeg',
    'https://thecollision.org/wp-content/uploads/2023/06/4.png',
    'https://static.independent.co.uk/2023/04/07/18/Screen%20Shot%202023-04-07%20at%201.41.46%20PM.png?width=1200',
    'https://i.ebayimg.com/images/g/GtEAAOSw1W9eN1cY/s-l1600.jpg'
  ];

  return (
    <Suspense fallback={<h1 className='text-4xl text-black'>Loading</h1>}>
      <div className="relative mx-auto pt-8 justify-center items-center min-h-[500px] w-[80%] overflow-hidden">
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
              className="w-full h-[500px] relative flex justify-center items-center"
            >
              <img
                className="object-cover max-w-full max-h-full rounded-lg"
                src={image}
                alt={`Image ${i}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Suspense>
  );
};

export default CarouselComponent;
