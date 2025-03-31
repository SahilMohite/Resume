import React from "react";
import cutoutImage from "/src/assets/images/my photo.png";

const HeaderAbout: React.FC = () => {
  const cardImages = [
    "https://www.ied.edu/_default_upload_bucket/1081/image-thumb__1081__scaleByWidth1000/1600x952px_Le%20scuole_Design.jpg",
    "https://www.adorama.com/alc/wp-content/uploads/2021/11/Types-of-Shots-for-Filmmakers-e1641493485327-1024x590.jpg",
    "https://www.thestatesman.com/wp-content/uploads/2023/01/iStock-1019326950.jpg",
    "https://picsum.photos/200/300?random=4",
    "https://afar.brightspotcdn.com/dims4/default/d5567ae/2147483647/strip/true/crop/3024x2016+504+0/resize/900x600!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F2d%2F61%2F5c02357f462b9bc155732b96e111%2Fsanta-monica-michelle-heimerman-lede.jpg",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg",
  ];

  const hoverTexts = [
    "Designing",
    "Filmmaking",
    "Bike riding",
    "Travelling",
    "Visiting beaches",
    "Football",
  ];

  const certifications = [
    {
      image: "https://mma.prnewswire.com/media/684591/Third_Bridge_Logo.jpg?p=facebook",
      name: "Client Service Delivery Job Simulation",
      issuer: "Third Bridge",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/3HY7euLNHJL494MHd/xzwFBbxXQCacYTL6g_3HY7euLNHJL494MHd_CixjE6ya3NtjJQfeK_1736598347646_completion_certificate.pdf"
    },
    {
      image: "https://dpogroup.com/wp-content/uploads/2017/11/skyscanner-scaled.jpeg",
      name: "Front-End Software Engineering Job Simulation",
      issuer: "Skyscanner",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_CixjE6ya3NtjJQfeK_1736529934002_completion_certificate.pdf"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
      name: "HackerRank CSS",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/iframe/b95f1c6c4084"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-In86mhCDZRUZ0JLgHoEWkgZLD8spyD1U0g&s",
      name: "NITTR Bhopal AI/ML",
      issuer: "NITTR Bhopal",
      url: "https://drive.google.com/file/d/1jLSc9c6D3uyt-nUUk7SOP39B8gfLVOYV/view"
    },
    {
      image: "https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM",
      name: "UI/UX Design Certification",
      issuer: "Design Institute",
      url: "https://www.example.com/uiux-certification"
    },
  ];

  return (
    <div className="container mx-auto my-auto relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto mb-8 relative z-10">
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-4">about.</h2>
          <p className="text-lg text-gray-600 mb-4">
            Hi, I'm Sahil Mohite, a passionate front-end developer with a knack for creating responsive and interactive
            websites. I enjoy working with React, TypeScript, and staying up-to-date with the latest trends in web
            development.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            When I'm not coding, you can find me exploring new technologies, reading, or working on personal projects that
            help improve my skills.
          </p>
          <a
            href="https://www.linkedin.com/in/sahil-mohite-a39957235/"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Connect with me on LinkedIn
          </a>
        </div>

        <div className="md:w-1/3 flex justify-center items-center">
          <img
            src="/src/assets/images/my photo.png"
            alt="Sahil Mohie"
            className="w-100 h-80 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto z-10 relative">
        {cardImages.map((image, index) => (
          <div
            key={index}
            className="relative group animate-fadeIn"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-40 object-cover mb-2 rounded transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 group-hover:opacity-100">
              {hoverTexts[index]}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-serif font-bold text-white my-8 text-center">Certifications</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-wrap gap-4 justify-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative animate-slideIn"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-100 rounded-full p-2 pr-6 hover:bg-gray-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-300">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">{cert.name}</span>
                  <span className="text-xs text-gray-600">{cert.issuer}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HeaderAbout;