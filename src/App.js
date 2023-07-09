import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import { useState,useEffect } from 'react';
// import axios from 'axios'

export const url = `http://localhost:4000`
function App() {

  // App = () => {
  //   const [email,setEmail] = useState('')

  //   useEffect(()=>{
  //     axios.get(`${url}/user`,{withCredentials:true,})
  //     .then(res => {
  //       setEmail(res.data.email);
  //     })
  //     .catch((err)=>{  
  //       console.log(err)
  //     })
  //   },[])
  // }
  return (
    <div style={{ display: "gird" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={'/'} Component={Home} />
          <Route exact path={'/Login'} Component={Login} />
          <Route exact path={'/Signup'} Component={Signup} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
