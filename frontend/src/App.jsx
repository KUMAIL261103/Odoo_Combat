import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Facility } from './pages/Facility'
import { Maintenance } from './pages/Maintenance'
import MaintenanceLog from './pages/MaintenanceLog';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
 

  return (
    <ChakraProvider>
    <>

    <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/signin" element={<Signin/>} />
        <Route path="/facility" element={<Facility/>} />
        <Route path="/maintenance" element={<Maintenance/>} />
        <Route path="/maintenance-log" element={<MaintenanceLog />} /> 
       



      </Routes>
    
    </BrowserRouter>
    </>
    </ChakraProvider>
  )
}

export default App
