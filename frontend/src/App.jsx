import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Facility } from "./pages/Facility";
import { Maintenance } from "./pages/Maintenance";
// import MaintenanceLog from "./pages/MaintenanceLog";
import { ChakraProvider } from "@chakra-ui/react";
import CalenderPage from "./pages/Calender";
import { Bookings } from "./pages/Bookings";
import { AdminBooking } from "./pages/AdminBooking";
import NotFound from "./components/Notfound";
import CreateFacility from "./pages/CreateFacility";
function App() {
  // const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;

  return (
    <ChakraProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {user?.role === "user" ? (
              <>
                <Route path="/facility" element={<Facility />} />
                <Route path="/calender" element={<CalenderPage />} />
                <Route path="/booking" element={<Bookings />} />
              </>
            ) : (
              <>
                <Route path="/facility" element={<Signin />} />
                <Route path="/calender" element={<Signin />} />
                <Route path="/booking" element={<Signin />} />

              </>
            )}
            {user?.role == "manager" || user?.role == "admin" ? (
              <>
                <Route path="/maintenance" element={<Maintenance />} />
                {/* <Route path="/maintenance-log" element={<MaintenanceLog />} /> */}
              </>
            ) : (
              <>
                <Route path="/maintenance" element={<Signin />} />
                {/* <Route path="/maintenance-log" element={<Signin />} /> */}
              </>
            )}
            {user?.role == "admin" ? (
              <>
                <Route path="/admin-booking" element={<AdminBooking />} />
                <Route path="/create-facility" element={<CreateFacility />} />
              </>
            ) : (
              <>
                <Route path="/admin-booking" element={<Signin />} />
                <Route path="/create-facility" element={<Signin />}  />
              </>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    </ChakraProvider>
  );
}

export default App;
