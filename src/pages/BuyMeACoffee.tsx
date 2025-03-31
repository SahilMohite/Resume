import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

interface CoffeeOption {
  label: string;
  amount: number;
  image: string; // Add an image for each coffee option
}

const BuyMeCoffee: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const navigate = useNavigate(); // Initialize navigate hook

  const coffeeOptions: CoffeeOption[] = [
    { label: 'Buy Short Coffee', amount: 50, image: 'https://img.freepik.com/premium-psd/paper-cup-coffee-small-size-mockup_474486-664.jpg' },
    { label: 'Buy Tall Coffee', amount: 150, image: 'https://i.pinimg.com/736x/73/33/b6/7333b6558038e5afe36e908e676850e1.jpg' },
    { label: 'Buy Grande Coffee', amount: 250, image: 'https://png.pngtree.com/png-clipart/20190611/original/pngtree-coffee-png-image_2651902.jpg' },
  ];

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleBuyNow = () => {
    if (selectedAmount !== null) {
      // Redirect to a payment page with selectedAmount as part of the state
      navigate('/payment', { state: { amount: selectedAmount } });
    } else {
      alert('Please select a coffee option.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-500 flex flex-col items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-600">
          Buy Me a Coffee
        </h1>
        <p className="text-gray-600 mb-8 text-center text-lg">
          If you'd like to support my work, feel free to buy me a coffee!
        </p>

        <div className="space-y-6 mb-8">
          {coffeeOptions.map((option) => (
            <div
              key={option.amount}
              onClick={() => handleSelectAmount(option.amount)}
              className={`cursor-pointer p-4 rounded-lg shadow-md flex items-center transition-transform transform ${
                selectedAmount === option.amount
                  ? 'bg-yellow-400 scale-105 text-white'
                  : 'bg-gray-100 scale-100 text-gray-800 hover:scale-105'
              }`}
            >
              <img
                src={option.image}
                alt={option.label}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div className="flex-1">
                <p className="text-xl font-semibold">{option.label}</p>
                <p className="text-lg">₹{option.amount}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleBuyNow}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Buy Now
        </button>
      </div>

      <div className="mt-8 text-gray-600 text-center">
        <p>Thank you for your support! 💛</p>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
