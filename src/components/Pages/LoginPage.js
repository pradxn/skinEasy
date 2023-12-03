import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Signing up with:', email, password);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const formAnimation = useSpring({
    opacity: isSignUp ? 0 : 1,
    transform: isSignUp ? 'translateX(-100%)' : 'translateX(0%)',
  });

  const signUpFormAnimation = useSpring({
    opacity: isSignUp ? 1 : 0,
    transform: isSignUp ? 'translateX(0%)' : 'translateX(100%)',
  });

  return (
    <div className="login-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      {isSignUp ? (
        <animated.form style={signUpFormAnimation}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>

          <br />

          <p onClick={toggleSignUp}>
            <b>
              Already have an account? Login
            </b>
          </p>
        </animated.form>
      ) : (
        <form style={formAnimation}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="button" onClick={handleLogin}>
            Login
          </button>

          <br />

          <p onClick={toggleSignUp}>
            <b>
              Don't have an account? Sign Up
            </b>
          </p>
        </form>
      )}

      <div className="forgot-password">
        
        <br />
        
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default LoginPage;
