import React from 'react';
import { FaGithub, FaLinkedin,FaInstagram } from 'react-icons/fa';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/SAHIL-MOHITE26', // Replace with your GitHub URL
    icon: <FaGithub />,
    bgColor: 'bg-gray-900',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sahil-mohite-a39957235/', // Replace with your LinkedIn URL
    icon: <FaLinkedin />,
    bgColor: 'bg-blue-700',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sahil_mohite26', // Replace with your Instagram URL
    icon: <FaInstagram />,
    bgColor: 'bg-pink-500',
  },
];

const SocialsPage: React.FC = () => {
  return (
    <div className="h-[500px] flex flex-col justify-center items-center bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 mb-9 mt-[-100px]">
      <h1 className="text-5xl font-extrabold text-white mb-12 mt-[-200px] drop-shadow-md">Connect with Me</h1>
      <div className="flex space-x-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-16 h-16 rounded-full flex justify-center items-center shadow-lg transform transition-transform hover:scale-110 ${social.bgColor} text-white`}
          >
            <span className="text-2xl">{social.icon}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 text-white text-sm">
        <p className="opacity-70">Let's connect on social media!</p>
      </div>
    </div>
  );
};

export default SocialsPage;
