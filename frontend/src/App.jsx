import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Facility } from "./pages/Facility";
import { Maintenance } from "./pages/Maintenance";
import MaintenanceLog from "./pages/MaintenanceLog";
import { ChakraProvider } from "@chakra-ui/react";
import CalenderPage from "./pages/Calender";
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
       
        {
          user?.role==="user" ? 
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
