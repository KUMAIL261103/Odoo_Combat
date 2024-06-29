import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/signin" element={<Signin/>} />

      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
