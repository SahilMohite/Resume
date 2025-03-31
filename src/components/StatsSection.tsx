import React from "react";
import { FaLaptopCode, FaProjectDiagram, FaUsers } from "react-icons/fa";

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: "Years of Experience",
      value: "1+",
      icon: <FaLaptopCode className="text-indigo-600 text-6xl" />,
    },
    {
      title: "Projects Completed",
      value: "10+",
      icon: <FaProjectDiagram className="text-indigo-600 text-6xl" />,
    },
    {
      title: "Clients Worked With",
      value: "5+",
      icon: <FaUsers className="text-indigo-600 text-6xl" />,
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-26 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center max-w-md mx-auto gap-x-6 text-left mt-[-45px]"
            >
              <div className="flex-shrink-0">{stat.icon}</div>
              <div>
                <dt className="text-lg font-medium text-gray-600">{stat.title}</dt>
                <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default StatsSection;
