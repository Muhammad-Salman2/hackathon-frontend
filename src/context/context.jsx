//src/context/context.jsx
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
// import AppRouts from "../constant/constants.js";
import AppRouts from "../constant/constant.jsx";

// Create a context
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize user state
  const [token, setToken] = useState(Cookies.get("token") || null); // Initialize token state
  const [session, setSession] = useState(
    sessionStorage.getItem("tokenForSessionStorage") || null
  ); // Initialize session storage token
  const [loading, setLoading] = useState(true); // Handle loading state

  useEffect(() => {
    const fetchUserData = async () => {
      // If session exists, get user info from session
      if (session) {
        await getUserInfo(session);
      }
      // If token exists but session doesn't, update session and get user info from session
      else if (!session && token) {
        sessionStorage.setItem("tokenForSessionStorage", token); // Update session storage
        setSession(token); // Update session state
        await getUserInfo(token); // Use token directly
        console.log(user);

        // await getUserInfo(session);
      }
      // If session exists but token doesn't, get user info
      else if (session && !token) {
        await getUserInfo(session);
      }
      // If neither session nor token exists, clear user state
      else if (!session && !token) {
        setUser(null);
        setLoading(false);
      }
    };

    fetchUserData(); // Call the async function inside useEffect
  }, [token, session]); // Dependencies: token and session

  const getUserInfo = async (currentUserToken) => {
    try {
      setLoading(true);
      const response = await axios.get(AppRouts.getCurrentUserProfile, {
        headers: {
          Authorization: `Bearer ${currentUserToken}`,
        },
      });
      // console.log("User Info: ", response.data.data);
      
      setUser(response.data.data); // Setting user data as global state
    } catch (err) {
      console.error("Error fetching user info: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, session, setSession, loading }}
    >
      {" "}
      {console.log("User: ", user)}
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
