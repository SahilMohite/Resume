import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="w-full sm:w-[1568px]  ml-[-25px] mx-auto p-4 sm:p-6 mb-[-60px]">
      {/* Container with rounded corners */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg  p-6 mt-[-60px]">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 mt-40 font-serif text-center text-white">About Me</h1>
        
        {/* Content Section */}
        <section className="mb-8 flex flex-col sm:flex-row">
          <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
            {/* Paragraph about yourself */}
            <p className="mb-4 text-lg sm:text-base text-center max-w-md mx-auto text-white">
  Hello! I'm Sahil Mohite, a passionate front-end developer with experience in building responsive and user-friendly web applications. My journey in tech began with a love for design and aesthetics, which naturally evolved into a career in development.
</p>
            
            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1FldZ0ynfMpCjsbmvuoZypuKXjUJ4x0Kr/view?usp=sharing" // Link to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 ml-[635px] mb-40 inline-block px-6 py-2 bg-gray-500 text-white font-semibold border border-transparent rounded hover:bg-gray-600 text-center transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
