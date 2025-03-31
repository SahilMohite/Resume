import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StatsSection from './StatsSection';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const skills = [
    { name: 'React.js', icon: <FaReact size={50} title="React" />, proficiency: 90 },
    { name: 'JavaScript', icon: <FaJs size={50} title="JavaScript" />, proficiency: 85 },
    { name: 'HTML & CSS', icon: <FaHtml5 size={50} title="HTML5" />, proficiency: 80 },
    { name: 'UI/UX Design', icon: <FaCss3Alt size={50} title="CSS3" />, proficiency: 75 },
    { name: 'Git & Version Control', icon: <FaGitAlt size={50} title="Git" />, proficiency: 70 },
  ];

  const knowMeButtonRef = useRef<HTMLButtonElement>(null);
  const downloadResumeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Fade-in effect for the text section 
    gsap.fromTo(
      ".text-section", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".text-section", // Trigger the animation
          start: "top 80%", // Start when the top of the element hits 80% of the viewport height
          toggleActions: "play none none reverse",
        }
      }
    );

    // Fade-in effect for the progress section
    gsap.fromTo(
      ".progress-section", 
      { opacity: 0, x: 100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".progress-section", // Trigger the animation
          start: "top 80%", // Start when the top of the element hits 80% of the viewport height
          toggleActions: "play none none reverse",
        }
      }
    );

    // Fade-in effect for the buttons
    gsap.fromTo(
      knowMeButtonRef.current, 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: knowMeButtonRef.current, // Trigger the animation
          start: "top 90%", // Start when the top of the button hits 90% of the viewport height
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      downloadResumeButtonRef.current, 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: downloadResumeButtonRef.current, // Trigger the animation
          start: "top 90%", // Start when the top of the button hits 90% of the viewport height
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <div className="w-full p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600  ">
      <div className="flex flex-col md:flex-row md:space-x-8 h-full">
        {/* Skills List Section */}
        <section className="flex-1 text-white mb-8 md:mb-0 text-section">
          <h1 className="ml-20 font-bold text-5xl mt-7">My Skills</h1>
          <hr className="w-80 border-lime-400 mt-5 ml-20"></hr>
          <h2 className="ml-20 mt-4 mr-2">
            "As a front-end web developer, I specialize in creating engaging and responsive user interfaces. My skills are rooted in HTML & CSS, the building blocks of web design, allowing me to craft visually appealing and structurally sound layouts. With JavaScript, I bring functionality and interactivity to websites, ensuring a dynamic user experience.
            I’m proficient in React.js, a powerful library that helps me build fast, scalable, and interactive web applications. By leveraging UI/UX Design principles, I focus on user-centric designs that enhance usability, ensuring that every interaction feels intuitive and seamless."
          </h2>
          
          {/* Buttons Section */}
          <div className="ml-20 mt-6 flex space-x-6">
            <button 
              ref={knowMeButtonRef}
              className="bg-lime-400 text-black font-semibold py-2 px-4 rounded hover:bg-lime-500 transition duration-300"
              onClick={() => navigate('/about')} // Redirects to '/about' page
            >
              Know Me
            </button>
            <button 
            ref={downloadResumeButtonRef}
            className="bg-transparent border border-lime-400 text-lime-400 font-semibold py-2 px-4 rounded hover:bg-lime-500 hover:text-black transition duration-300"
            onClick={() => window.open('https://drive.google.com/file/d/1bb_P2xTYeY7w-F8T-_qW5-zOnOlQmw9g/view?usp=sharing', '_blank')}
          >
            Download Resume
            </button>
          </div>
        </section>

        {/* Progress Lines Section */}
        <section className="flex-1 progress-section">
          <div className="p-6 rounded-lg h-full">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-white">{skill.proficiency}%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-300 rounded-full h-2 relative group">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                  {/* Hover Tooltip */}
                  <div
                    className="absolute left-0 top-[-20px] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ left: `${skill.proficiency}%` }}
                  >
                    {skill.proficiency}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </div>
      <StatsSection/>
    </div>
    
  );
};

export default Skills;
