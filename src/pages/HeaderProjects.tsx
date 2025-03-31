import React, { useState } from 'react';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

// Importing local images
import portfolioImage from '/src/assets/images/portfolio.jpg';
import junkyardImage from '/src/assets/images/junkyard.jpg';
import seiAdminImage from '/src/assets/images/sei-admin.jpg';

// Interface for Project
interface Project {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'ongoing';
  imageUrl: string; // URL for the image
  externalLink: string; // External URL
}

// Sample Projects Data
const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A personal website to showcase my work and skills.',
    status: 'completed',
    imageUrl: portfolioImage, // Imported local image
    externalLink: 'https://sahilmohite.netlify.app/home', // External URL
  },
  {
    id: 2,
    title: 'JetSetWheels',
    description: 'An online store for selling products.',
    status: 'ongoing',
    imageUrl: "https://www.jetsetrims.com/", // Imported local image
    externalLink: 'https://www.jetsetrims.com/', // External URL
  },
  {
    id: 3,
    title: 'JunkYard',
    description: 'A platform for your style.',
    status: 'completed',
    imageUrl: junkyardImage, // Imported local image
    externalLink: 'https://junkyard.com', // External URL
  },
  { 
    id: 4,
    title: 'Videography Portfolio',
    description: 'HTML file.',
    status: 'completed',
    imageUrl: 'https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM', // External image URL
    externalLink: 'https://www.figma.com/design/cHbTG4tjDAyDnkzeecm3HE/Gadgets.in?node-id=29-76&m=dev', // External URL
  },
  {
    id: 5,
    title: 'SEI Admin Panel',
    description: 'An app to manage and track tasks efficiently.',
    status: 'ongoing',
    imageUrl: seiAdminImage, // Imported local image
    externalLink: 'https://sei-adminpanel.netlify.app/', // External URL
  },
  { 
    id: 6,
    title: 'Gadgets.in',
    description: 'FIGMA file.',
    status: 'completed',
    imageUrl: 'https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM', // External image URL
    externalLink: 'https://www.figma.com/design/cHbTG4tjDAyDnkzeecm3HE/Gadgets.in?node-id=29-76&m=dev', // External URL
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');

  // Filter projects based on selected filter
  const filteredProjects = projects.filter((project) => {
    if (filter === 'completed') return project.status === 'completed';
    if (filter === 'ongoing') return project.status === 'ongoing';
    return true; // Show all projects
  });

  return (
    <div className="max-w-8xl mx-auto p-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
      <h1 className="text-4xl text-white font-bold text-center mb-8">Projects</h1>
  
      {/* Filter Buttons */}
      <div className="mb-6 text-center">
        <button
          onClick={() => setFilter('all')}
          className={`mx-2 px-4 py-1 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`mx-2 px-4 py-1 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('ongoing')}
          className={`mx-2 px-4 py-1 rounded-lg ${filter === 'ongoing' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Ongoing
        </button>
      </div>

      <div className="flex flex-col space-y-8">
        {filteredProjects.map((project) => (
          <a 
            key={project.id} 
            href={project.externalLink} // External link
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg p-6 flex items-center transition-transform transform hover:scale-105 cursor-pointer"
            style={{ minHeight: '250px' }} 
          >
            {/* Image Section */}
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-32 h-32 object-cover rounded-md mr-6" 
            />
            {/* Text Content Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex items-center">
                {project.status === 'completed' ? (
                  <FaCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FaClock className="text-yellow-500 mr-2" />
                )}
                <span className="text-lg font-medium">
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
