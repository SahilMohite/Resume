import React from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  

  const images = [
    'https://marketplace.canva.com/EAFYC8yWXio/1/0/1600w/canva-green-minimalist-landscape-quote-desktop-wallpaper-OuM9mjCoT60.jpg',
    'https://bestfreehtmlcsstemplates.com/uploads/templates-images/13ff21b90b362a19d4a1513f1b6222f2.webp',
    'https://www.bookingpressplugin.com/wp-content/uploads/2024/01/Baker-Tilly.webp',
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="flex justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 mt-[-20px]">
      <div className="relative mt-9 w-full lg:w-[1300px] mx-auto lg:h-[420px]">
        <div className="overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out absolute inset-0 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover  rounded-lg mt-[-20px]" // Make image responsive
              />
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Carousel;
