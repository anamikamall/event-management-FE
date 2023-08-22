
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import CreateEvent from './components/CreateEvent';




function App() {
  const [loginVisibility, setLoginVisibility] = useState(false);
  const closeLogin =()=>{
    
    if(loginVisibility){
     setLoginVisibility(false);
    } else 
    {
     setLoginVisibility(true);
    }
   }

  return (
    <>
    <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/login" element={<Login closeLogin={closeLogin}/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/create-event" element={<CreateEvent/>}/>
   </Routes>
  
  
   </>
    
  
  );
}

export default App;
