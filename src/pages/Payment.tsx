import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const { amount } = location.state || {};
  const navigate = useNavigate();

  // State to manage the selected payment method
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [upiId, setUpiId] = useState<string>('');
  const [showThankYouMessage, setShowThankYouMessage] = useState<boolean>(false);

  // Handle proceed to payment logic
  const handleProceedToPayment = () => {
    setShowThankYouMessage(true); // Show thank you message

    // Redirect to the home page after a delay
    setTimeout(() => {
      navigate('/'); // Redirect to home page
    }, 3000); // 3 seconds delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl w-full p-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-white w-full  mt-40 ml-[-120px]">
          A supporter is worth a thousand followers.
        </h1>

        {/* Payment Summary Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Payment Summary</h2>
          <p className="text-gray-600 mb-4">You are about to pay:</p>

          <div className="bg-yellow-300 text-gray-800 font-bold text-3xl md:text-4xl text-center py-4 rounded-lg mb-7 shadow-md">
          ₹{amount}
          </div>

          <p className="text-gray-600 mb-8">
            Thank you for buying me a coffee! Your support is appreciated. 💛
          </p>

          <button
            onClick={handleProceedToPayment}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 shadow-md"
          >
            Proceed to Payment
          </button>

          {/* Thank You Message */}
          {showThankYouMessage && (
            <div className="mt-4 text-green-600 font-bold text-lg text-center">
              Thank you for your payment! 🙌
              Redirecting you to Home...
            </div>
          )}
        </div>

        {/* Payment Options Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Options</h2>
          <p className="text-gray-600 mb-4">Choose your preferred payment method:</p>

          <ul className="space-y-4">
            <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <input
                type="radio"
                name="payment"
                id="creditCard"
                className="mr-2"
                onChange={() => {
                  setSelectedPayment('creditCard');
                  setUpiId(''); // Reset UPI ID when changing to credit card
                }}
              />
              <label htmlFor="creditCard" className="text-gray-800">Credit/Debit Card</label>
            </li>
            <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <input
                type="radio"
                name="payment"
                id="upi"
                className="mr-2"
                onChange={() => {
                  setSelectedPayment('upi');
                  setUpiId(''); // Reset UPI ID when changing to UPI
                }}
              />
              <label htmlFor="upi" className="text-gray-800">UPI</label>
            </li>
          </ul>

          {/* UPI ID Input */}
          {selectedPayment === 'upi' && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <label htmlFor="upiId" className="block text-gray-800 mb-2">Enter your UPI ID:</label>
              <input
                type="text"
                id="upiId"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="yourname@upi"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
