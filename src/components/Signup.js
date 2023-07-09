import React, { useContext, useState } from 'react';
import axios from 'axios'
import { url } from '../App'
const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signerr, setsignerr] = useState(false)

  const registeruser = async () => {
    try {
      const response = await axios.post('http://localhost:3002/signup',{
        email,
        password
      })
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  } 

  return (
    <div className="container mt-5">
      <div className="row justify-content-center" >
        <div className="col-md-3">
          <div className="card" style={{ backgroundColor: '#22dd95' }}>
            <div className="card-header" style={{ color: 'white' }}>
              Sign Up
            </div>
            <div className="card-body" >
              <form action='' onSubmit={e => registeruser(e)}>
                {signerr && (
                  <div>User already exists!</div>
                )}
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
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn" style={{ border: '1px solid white' }}>Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
