import React, { useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../context/context";

const LogoutButton = () => {
  const { setUser, setToken } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);                                    // Clear user state
    setToken(null);                                  // Clear token state
    Cookies.remove("token");                        // Remove token from cookies
    sessionStorage.clear("tokenForSessionStorage")
    console.log("User logged out successfully");
   
    window.location = "/";    //Redirect forcefully to the main landing screen
  };

  return (
    <button onClick={handleLogout}
    className="w-full bg-navbarColor font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
    > Logout  </button>
  );
};

export default LogoutButton;
