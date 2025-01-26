import React from "react";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar Component */}
      {/* <Navbar /> */}

      <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-blue-50 p-6">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl text-black-800 font-bold text-center mb-12">
          Micro Finance System
        </h1>

        {/* Options Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Home Loan */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200"
            onClick={() => navigate("/homeLoan")}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-black-800 mb-4">
                Home Loan
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Secure your dream home with our easy and affordable home loan options.
              </p>
            </div>
          </div>

          {/* Wedding Loan */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200"
            onClick={() => navigate("/weddingLoan")}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-black-800 mb-4">
                Wedding Loan
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Plan your perfect wedding with flexible loan packages tailored for you.
              </p>
            </div>
          </div>

          {/* Education Loan */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200"
            onClick={() => navigate("/education")}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-black-800 mb-4">
                Education Loan
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Achieve your educational goals with our hassle-free loan services.
              </p>
            </div>
          </div>

          {/* Business Loan */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200"
            onClick={() => navigate("/bussnisLoan")}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-black-800 mb-4">
                Business Loan
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Expand your business with our affordable and flexible business loan plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
