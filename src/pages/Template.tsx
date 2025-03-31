const cardData = [
    { id: 1, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/glint-free-fullscreen-small-business-template.jpg.webp', reviewLink: 'https://colorlib.com/wp/template/glint/',chooseLink:'/contact' },
    { id: 2, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/nitro-free-template-353x278.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/nitro/' ,chooseLink:'/contact'},
    { id: 3, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/rezume-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/rezume/' ,chooseLink:'/contact'},
    { id: 4, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/rezume-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/rezume/',chooseLink:'/contact' },
    { id: 5, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/orbit-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/orbit/',chooseLink:'/contact' },
    { id: 6, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/busicol-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/busicol/',chooseLink:'/contact' },
    { id: 7, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/skater-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/skater/',chooseLink:'/contact' },
    { id: 8, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/myphotography-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/myphotography/' ,chooseLink:'/contact'},
    { id: 9, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/eroo-colorlib-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/myphotography/',chooseLink:'/contact' },
  ];
  
  const Templates = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
        
        {/* Heading Section */}
        <h1 className="text-4xl text-white font-bold mt-10">Choose Your Template</h1> {/* Centered Heading */}
        <hr className="px-20 mt-3 mb-[-24px]"></hr>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 w-[1200px]">
          {cardData.map((card) => (
            <div 
              key={card.id} 
              className="p-6 transform transition-all duration-300  hover:scale-105 overflow-hidden" // Card hover effects
            >
              <div className="overflow-hidden rounded-md mb-4"> {/* Image container */}
                <img 
                  src={card.imageUrl} 
                  className="w-full h-56 object-fill transition-transform duration-300 hover:scale-110" // Image hover zoom effect
                />
              </div>
      
              {/* Buttons section */}
              <div className="flex justify-between">
                <a href={card.chooseLink} target="_blank" rel="noopener noreferrer" className="px-11 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 ml-2">
                  Choose
                </a>
                <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" className=" px-12 py-2 bg-gray-500 text-white hover:bg-gray-600 transition-all duration-200 mr-2">
                  Review
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Templates;
  