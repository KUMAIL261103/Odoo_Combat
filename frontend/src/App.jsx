import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Facility } from "./pages/Facility";
import { Maintenance } from "./pages/Maintenance";
import MaintenanceLog from "./pages/MaintenanceLog";
import { ChakraProvider } from "@chakra-ui/react";
import CalenderPage from "./pages/Calender";
import {Bookings } from "./pages/Bookings";
import { AdminBooking } from "./pages/AdminBooking";
function App() {
 
 // const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("User:", user);

  return (
    <ChakraProvider>
    <>

    <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/signin" element={<Signin/>} />
<<<<<<< HEAD
       
        {
          user?.role==="user" ? 
=======
        <Route path="/facility" element={<Facility/>} />
        <Route path="/calender" element={<CalenderPage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/admin-booking" element={<AdminBooking />} />

        {/* {
          user.role=="user" ? 
>>>>>>> 7b162517b3c95e0a9396ac2b2b866fd721746d61
          <>
          <Route path="/facility" element={<Facility/>} />
          <Route path="/calender" element={<CalenderPage />} />
          </>
          :<>
          <Route path="/facility" element={<Signin/>}/>
             <Route path="/calender" element={<Signin />} />
          </>
        }
         {/* <Route path="/maintenance" element={<Maintenance/>} />
        <Route path="/maintenance-log" element={<MaintenanceLog />} /> */}
       
        {
           user?.role=="manager" ? 
            <>
              <Route path="/maintenance" element={<Maintenance/>} />
              <Route path="/maintenance-log" element={<MaintenanceLog />} />
            </>
           : 
            <>
              <Route path="/maintenance" element={<Signin/>} />
              <Route path="/maintenance-log" element={<Signin />} />
            </>
          
        }
        
       



      </Routes>
    
    </BrowserRouter>
    </>
    </ChakraProvider>
  
         
          
  );
}

export default App;
