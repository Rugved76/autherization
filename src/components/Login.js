import React, { useState, useContext } from 'react';
import axios from 'axios';
import { url } from '../App'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginerror, setloginerror] = useState(false)
  const [li, setLi] = useState(false)

  const loginuser = async () => {
    try {
      const response = await axios.post('http://localhost:3002/login', {
        email,
        password
      });

      setLi(true)
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setLi(false)
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card" style={{ backgroundColor: '#22dd95' }}>
            <div className="card-header" style={{ color: 'white' }}>
              Login
            </div>
            {loginerror && (
              <div>Login error, wrong credentials, please try again!</div>
            )}
            <div className="card-body">
              <form action='' onSubmit={e => loginuser(e)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.password)}
                  />
                </div>
                <button type="submit" className="btn" style={{ border: '1px solid white' }}>Login</button>
              </form>
              {li && (
                <h1>Logged in</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
