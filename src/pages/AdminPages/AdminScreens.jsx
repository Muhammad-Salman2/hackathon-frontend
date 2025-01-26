// import React from "react";
// import { Outlet } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../../context/context";
// import LogoutButton from "../../components/Logout";

// function AdminScreens() {
//   const {  user } = useContext(AuthContext);
//   console.log("user", user);

  
//   return (
//     <div className="w-full bg-gray-100 flex flex-col md:flex-row shadow">
            
//       <div className="bg-cyan-800 w-full md:w-1/6">
//         <div className="flex md:hidden justify-between items-center bg-cyan-800 px-4 py-2">
//           <div className="font-serif text-xl text-white">ADMIN</div>
//         </div>

//         <div className="font-bold uppercase text-xl md:text-2xl text-center text-white py-6 hidden md:block">
//           ADMIN
//         </div>

        
//         <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white">
//           All userdetails
//         </div>
//         <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white">
//         <LogoutButton/>
//         </div>
//       </div>

//       {/* <div className="flex flex-col flex-end w-full md:w-5/6 bg-blue-50">
//         <Outlet />
//       </div> */}
//     </div>
//   );
// }

// export default AdminScreens;
// ---------------------------------------
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { Link, Outlet } from "react-router-dom"; // Import Outlet
import LogoutButton from "../../components/Logout";

function AdminScreens() {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  return (
    <div className="w-full bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="bg-cyan-800 w-full flex items-center justify-between px-4 py-4 shadow">
        {/* Admin Logo */}
        <div className="font-serif text-2xl text-white">ADMIN</div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          {/* All User Details */}
          <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white hover:bg-cyan-700 px-4 py-2 rounded">
            <Link to="userdetails">User Details</Link>
          </div>

          {/* Logout Button */}
          <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white hover:bg-cyan-700 px-4 py-2 rounded">
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full bg-blue-50 p-4">
        <Outlet /> {/* Render nested routes here */}

        <div>
          <h1>hwllo Dmin</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminScreens;
