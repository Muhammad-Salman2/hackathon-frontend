import React, { useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import AppRouts from "../constant/constant";
import { AuthContext } from "../context/context.jsx";
import { useNavigate } from "react-router-dom";

export default function Login({ closeModal }) {
  const navigate = useNavigate();

  const { setSession, setToken, setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email: ", email);
    console.log("Password: ", password);

    if (!email || !password) {
      alert("Email and Password are required");
      return;
    }

    const obj = {
      email,
      password,
    };
    setLoading(true);

    // Calling API to get sign in
    axios
      .post(AppRouts.signin, obj)
      .then((res) => {
        console.log("Login Response: ", res);

        const token = res?.data?.data?.token;
        const currentUser = res?.data?.data?.user;
        console.log("currentUser: ", currentUser);
        console.log("currentUser.role", currentUser.role);
        console.log("Token: ", token);

        setLoading(false);

        // Update sessionStorage & cookies to maintain tab session
        Cookies.set("token", token, { expires: 7 });
        sessionStorage.setItem("tokenForSessionStorage", token);

        //****** Update token, user state in AuthContext to maintain Auth function
        setSession(token);
        setToken(token);
        setUser(currentUser);

        // Navigate based on user role
        // switch (currentUser.role) {
        //   case "admin":
        //     navigate("/admin"); // Redirect to admin page
        //     break;
        //   case "visitor":
        //     navigate("/auth"); // Redirect to admin page
        //     break;
        //   default:
        //     alert("UnAuthorized person !.");
        //     break;
        // }
        switch (currentUser?.role?.toLowerCase()) {
          case "admin":
            navigate("/admin"); // Redirect to admin page
            break;
        
          // case "visitor":
          case "user":
            navigate("/user"); // Redirect to visitor page
            break;
        
          default:
            alert(`Unauthorized person! Role: ${currentUser?.role || "Unknown"}`);
            break;
        }
        
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error in Login:", err);
        // alert(err?.response?.data?.message || "Login failed. Please try again.");
        alert("Login failed. Please try again.");
      });
  };

  return (
    <>
      <div className="fixed inset-0 bg-blue-50  flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={closeModal} // Close the modal when button is clicked
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading} // Disable button while loading
                className={`px-4 py-2 ${
                  loading ? "bg-gray-400" : "bg-blue-600"
                } text-white rounded-md hover:bg-blue-700`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
