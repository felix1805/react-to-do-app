import { useState } from "react";
const Auth = () => {
  const [error, setError] = useState(null)
  const [isLogIn, setIsLogIn] = useState(true)
  const viewLogin = (status) => {
    setError(null)
    setIsLogIn(status)
  }
  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? "Please Log In" : "Please Sign Up"}</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {!isLogIn && <input type="password" placeholder="confirm password" />}
          <input type="submit" className="create" />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{ backgroundColor: !isLogIn ? 'rgb(255,255,255' : 'rgb(188,188,188' }}
          >Sign Up</button>
          <button
            onClick={() => viewLogin(true)}
            style={{ backgroundColor: isLogIn ? 'rgb(255,255,255' : 'rgb(188,188,188' }}
          >Login</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
