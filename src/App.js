import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import Signup from './Signup'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div style={{display:"gird"}}>       
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} Component={Home}/>
          <Route exact path={'/Login'} Component={Login}/>
          <Route exact path={'/Signup'} Component={Signup}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
