import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import portfolioImage from '/src/assets/images/portfolio.jpg';
import seiAdminImage from '/src/assets/images/sei-admin.jpg';
import gadgetsImage from '/src/assets/images/gadjets.png';

gsap.registerPlugin(ScrollTrigger); // Register the plugin

const MyPortfolio: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>(Array(4).fill(null)); // Initialize refs for buttons
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>(Array(6).fill(null)); // Initialize refs for cards

  const projects = [
    { id: 1, title: 'Personal Portfolio', category: 'Completed', imgSrc: portfolioImage, link: 'https://sahilmohite.netlify.app' },
    { id: 2, title: 'JunkYard', category: 'Completed', imgSrc: 'https://varner.com/globalassets/our_consepts/junkyard/junkyard_20_mob.jpg', link: 'https://junkyard.com' },
    { id: 3, title: 'Gadgets.in', category: 'Completed', imgSrc: gadgetsImage, link: 'https://www.figma.com/design/cHbTG4tjDAyDnkzeecm3HE/Gadgets.in?node-id=29-76&m=dev' },
    { id: 4, title: 'Project 4', category: 'Ongoing', imgSrc: 'https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM', link: 'https://yourproject4.com' },
    { id: 5, title: 'SEI Admin Panel', category: 'Completed', imgSrc: seiAdminImage, link: 'https://sei-adminpanel.netlify.app/' },
    { id: 6, title: 'Photography Portfolio', category: 'Completed', imgSrc: seiAdminImage, link: 'https://sei-adminpanel.netlify.app/' },
  ];

  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getCardHeight = (id: number) => {
    const heights = ['h-48', 'h-56', 'h-64', 'h-64'];
    return heights[id % heights.length];
  };

  useEffect(() => {
    // Fade in the title on scroll
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%', // Start animation when the top of the element is 80% down the viewport
          toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        },
      }
    );

    // Pop out buttons on scroll
    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2, // Stagger effect for buttons
        scrollTrigger: {
          trigger: buttonRefs.current[0], // Use the first button as the trigger
          start: 'top 80%', // Start animation when the top of the button is 80% down the viewport
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Fade in cards on scroll with stagger
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2, // Stagger effect for cards
        scrollTrigger: {
          trigger: cardRefs.current[0], // Use the first card as the trigger
          start: 'top 80%', // Start animation when the top of the card is 80% down the viewport
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [filteredProjects]); // Re-run effect when filteredProjects change

  return (
    <div className="w-full p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 mb-40">
      <h1 ref={titleRef} className="text-5xl mb-6 text-white text-center mt-12">My Portfolio</h1>

      <div className="flex justify-center space-x-4 mb-8">
        {/* Filter Buttons */}
        {['All', 'Completed', 'Ongoing', 'Upcoming'].map((filter, index) => (
          <button 
            key={filter}
            ref={el => buttonRefs.current[index] = el} // Assign ref to each button
            className={`py-2 px-4 rounded transition duration-300 ease-in-out 
                ${selectedFilter === filter ? 'text-lime-400' : 'text-white hover:text-lime-400'}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Portfolio Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredProjects.map((project, index) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            ref={el => cardRefs.current[index] = el} // Assign ref to each card
            className={`relative bg-gray-700 overflow-hidden text-white flex flex-col ${getCardHeight(project.id)} group`}
          >
            <div className="flex-1">
              <img 
                src={project.imgSrc} 
                alt={project.title} 
                className="w-full h-full rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-4xl font-bold">{project.title}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
