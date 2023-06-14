import { useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)
  const [isLogIn, setIsLogIn] = useState(true)

  const viewLogin = (status) => {
    setError(null)
    setIsLogIn(status)
  }

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()
    if (!isLogIn && password !== confirmPassword) {
      setError('Your Passwords Do Not Match!')
      return
    }

    await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
  }
  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? "Please Log In" : "Please Sign Up"}</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {!isLogIn && <input type="password" placeholder="confirm password" />}
          <input type="submit" className="create" onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')} />
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
