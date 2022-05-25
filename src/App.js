import React from 'react';
import Register from './components/Regiser';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  
  return (
    <>
    <Router>
     <Routes>
        <Route path="/" element={ <Register/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
    </Router>
    </>
  )
}

export default App