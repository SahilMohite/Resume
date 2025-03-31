import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type CarouselItem = {
  imageSrc: string;
  description: string;
  buttonText: string;
};

const carouselItems: CarouselItem[] = [
  {
    imageSrc: 'https://www.w3schools.com/howto/blackandwhiteportfolio-heros.png',
    description: 'Description for item 1',
    buttonText: 'Learn More',
  },
  {
    imageSrc: 'https://www.w3schools.com/howto/myportfolio.png',
    description: 'Description for item 2',
    buttonText: 'Discover',
  },
  {
    imageSrc: 'https://imgproxy.epicpxls.com/Ibf0JpqFqNSJpjjipt1tex9ZqmbdbyqB5zIsybibYqU/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by81ZjY5NGQ3/OTc2NWI4NmMzYmU0/YmRhZWIyNGI1YTcx/OA.jpg',
    description: 'Description for item 3',
    buttonText: 'See More',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // State for pop-up

  const navigate = useNavigate();
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null); // Reference for the image

  const handleRedirect = () => {
    navigate('/contact');
  };

  const constantDescription = "Want to create your portfolio? Let's do it!";
  const constantButtonText = "Click Here";

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Create animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 }, // Start from below
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
        delay: 8,
        duration: 1.5,
        ease: 'power4.out',
      }
    );

    // Create animation for the button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50, scale: 0.8 }, // Start from below and smaller
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
        },
        delay: 9,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
      }
    );

    // Animate the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 }, // Start from fully transparent
      {
        opacity: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
        duration: 2.5,
        ease: 'power4.out',
      }
    );

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setIsPopUpOpen((prev) => !prev); // Toggle the pop-up on button click
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-5 mt-[-36px] ">
      <div className="w-1/2">
        <img
          ref={imageRef} // Attach ref to the image
          src={carouselItems[currentIndex].imageSrc}
          alt="Carousel"
          className="w-[700px] h-[500px] object-cover mb-12 mt-20 ml-20"
        />
      </div>
      <div className="w-[875px] p-4 ml-8">
        <p
          ref={textRef}
          className="text-5xl text-left font-bold mb-2 ml-20 text-white"
        >
          {constantDescription}
        </p>
        <div className="relative">
          <button
            ref={buttonRef}
            className="mt-6 mb-10 ml-20 inline-block px-6 py-3 bg-transparent font-semibold text-white border border-white hover:bg-gray-500 hover:text-white text-center transition-all duration-200"
            onClick={handleButtonClick}
          >
            {constantButtonText}
          </button>

          {/* Pop-up */}
          {isPopUpOpen && (
            <div className="absolute left-0 mt-2 bg-white p-4 rounded shadow-lg z-50 ml-20">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Choose an Option</h2>
                <button
                  onClick={closePopUp}
                  className="text-gray-500 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9.586l-4.293-4.293-1.414 1.414L8.586 10l-4.293 4.293 1.414 1.414L10 10.414l4.293 4.293 1.414-1.414L11.414 10l4.293-4.293-1.414-1.414L10 9.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between">
                <button
                  className="inline-block px-6 py-3 bg-transparent font-semibold text-gray-500 border border-gray-500 hover:bg-blue-500 hover:text-white text-center transition-all duration-200"
                  onClick={() => (window.location.href = '/template')}
                >
                  Choose your template
                </button>
                <button
                  className="inline-block px-6 py-3 bg-transparent font-semibold text-gray-500 border border-gray-500 hover:bg-green-500 hover:text-white text-center transition-all duration-200"
                  onClick={handleRedirect}
                >
                  Give your idea
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
