import "./App.css";
import Form from "./components/common/Form";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/common/Home'
import { useState } from 'react'
import { app } from './components/common/firebase-config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from "react";
import DataFetch from "./components/common/DataFetch";
import MyComponent from "./components/Fetch";
import State from "./components/State";


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleAction = (id) => {
    const authentication = getAuth();

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then(response => {
        navigate('/home');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
    }

    if(id === 1){
      signInWithEmailAndPassword(authentication,email,password).then(response=>{
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
    }

  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
      navigate('/home');
    }
  }, [])

  return (
    <div className="App">
      <State/>
      <Routes>
        <Route path="/fetch" element={<DataFetch/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)} />} />
        <Route path="/register" element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
      </Routes>
    </div>
  );
}

export default App;
