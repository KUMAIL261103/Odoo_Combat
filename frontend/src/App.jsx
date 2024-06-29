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
  // const user = localStorage.getItem("user") || sessionStorage.getItem("user");

  return (
    <ChakraProvider>
    <>

    <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/signin" element={<Signin/>} />
        <Route path="/facility" element={<Facility/>} />
        <Route path="/calender" element={<CalenderPage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/admin-booking" element={<AdminBooking />} />

        {/* {
          user.role=="user" ? 
          <>
          <Route path="/facility" element={<Facility/>} />
          <Route path="/calender" element={<CalenderPage />} />
          </>
          :<>
          <Route path="/facility" element={<Signin/>}/>
             <Route path="/calender" element={<Signin />} />
          </>
        } */}
         <Route path="/maintenance" element={<Maintenance/>} />
        <Route path="/maintenance-log" element={<MaintenanceLog />} />
       
        {/* {
          token && user.role=="manager" ? (
            <>
              <Route path="/maintenance" element={<Maintenance/>} />
              <Route path="/maintenance-log" element={<MaintenanceLog />} />
            </>
          ) : (
            <>
              <Route path="/maintenance" element={<Signin/>} />
              <Route path="/maintenance-log" element={<Signin />} />
            </>
          )
        } */}
        
       



      </Routes>
    
    </BrowserRouter>
    </>
    </ChakraProvider>
  
         
          
  );
}

export default App;
