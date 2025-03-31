import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/images/my photo.png';

const BackgroundSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

  // Refs for the image and text elements
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const subTextRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null); // Ref for "Sahil Mohite"

  useEffect(() => {
    const tl = gsap.timeline();

    // Image fade-in from the right
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 }, // Start from the right
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
    )
      // Main text fade-in from the left
      .fromTo(
        textRef.current,
        { opacity: 0, x: -100 }, // Start from the left
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        '-=1' // Overlap with the image animation
      )
      // Name fade-in
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 20 }, // Start from below
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5' // Overlap slightly with the main text animation
      )
      // Subtext fade-in
      .fromTo(
        subTextRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5' // Overlap slightly with the main text animation
      )
      // Button fade-in
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
        '-=0.5' // Overlap slightly with the subtext animation
      );
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 flex flex-col justify-center items-center">
      {/* Image with fade-in animation */}
      <div
        ref={imageRef}
        className="absolute top-0 right-0 w-[850px] h-full bg-cover mt-20 rounded-bl-lg"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Text content with animations */}
      <div className="relative z-10 flex flex-col items-start pl-8 ml-[-900px]">
        <h1
          ref={textRef}
          className="text-white text-4xl mb-2 tracking-wide text-left"
        >
          Hello, I'm
        </h1>

        <h2
          ref={nameRef} // Add ref for the name
          className="text-white text-5xl sm:text-6xl font-serif font-bold tracking-wide text-left"
        >
          Sahil Mohite
        </h2>

        <h1
          ref={subTextRef}
          className="text-white text-xl font-serif text-left mt-1"
        >
          React JS | Front-End | UI/UX
        </h1>

        {/* Contact Me Button */}
        <button
          ref={buttonRef}
          className="mt-4 px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-200"
          onClick={handleButtonClick}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default BackgroundSection;
