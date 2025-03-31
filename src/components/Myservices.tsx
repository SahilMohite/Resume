import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaShoppingCart } from 'react-icons/fa'; // Import the desired icons

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Crafting beautiful and responsive website designs.',
    icon: <FaLaptopCode className="text-5xl text-green-500 mb-4" />, // React icon for Development
  },
  {
    id: 2,
    title: 'Design',
    description: 'Creating aesthetic and pleasing designs for your website.',
    icon: <FaPaintBrush className="text-5xl text-green-500 mb-4" />, // React icon for Design
  },
  {
    id: 3,
    title: 'FrontEnd',
    description: 'Building interactive and modern user interfaces.',
    icon: <FaShoppingCart className="text-5xl text-green-500 mb-4" />, // React icon for eCommerce
  },
];

const Myservices: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-b from-white to-gray-400">
      <h1 className="text-5xl mb-6 text-black text-center mt-[-120px]">Services</h1>
      <div className="ml-20 mt-10 mb-40 grid grid-cols-1 md:grid-cols-3 gap-8 w-[1300px] ">
        {services.map(service => (
          <div key={service.id} className="border rounded p-[60px] text-center transition-transform duration-300 hover:shadow-lg">
            <div className="flex justify-center mb-4"> {/* Centering the icon */}
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myservices;
