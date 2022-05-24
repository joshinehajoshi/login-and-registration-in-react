import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Register from './components/Regiser';

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  
  // axios({
  //   method: 'post',
  //   url: 'https://ttmg-backend.herokuapp.com/api/auth/staffLogin',
  //   data: {
  //     "email": "abhasing@gmail.com",
  //     "password": "abharani",
  //     "name": "Abha Singh",
  //     "mobile": "0123456789"
  //   }
  // });
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
