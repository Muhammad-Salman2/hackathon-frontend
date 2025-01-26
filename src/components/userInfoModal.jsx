
import React, { useState } from "react";

export default function UserInfoModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    cnic: "",
    email: "",
    name: "",
  });

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info Submitted:", userInfo);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="MY-4 bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-cyan-800 text-center mb-6">
          Wedding Loan Application
        </h1>

        {/* Proceed Button */}
        <button
          onClick={handleModalOpen}
          className="w-full bg-cyan-800 text-white py-3 rounded-lg font-medium hover:bg-cyan-700 transition duration-300"
        >
          Proceed
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
              Enter Your Information
            </h2>

            {/* Modal Form */}
            <form onSubmit={handleSubmit}>
              {/* CNIC Input */}
              <div className="mb-4">
                <label
                  htmlFor="cnic"
                  className="block text-gray-700 font-medium mb-2"
                >
                  CNIC
                </label>
                <input
                  type="text"
                  id="cnic"
                  name="cnic"
                  value={userInfo.cnic}
                  onChange={handleChange}
                  placeholder="Enter your CNIC"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  required
                />
              </div>

              {/* Name Input */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-cyan-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
