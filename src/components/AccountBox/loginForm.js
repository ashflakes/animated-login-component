import React, { useContext } from 'react'
import { AccountContext } from './accountContext';
import { Marginer } from '../marginer/marginer';

const LoginForm = () => {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <div className="bottom-container">
      <form className="form-container">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <Marginer direction="vertical" margin={10} />
      <a href="#" className="muted-link">Forgot your password?</a>
      <Marginer direction="vertical" margin={10} />
      <button type="submit" className="submit-button">Sign In</button>
      <Marginer direction="vertical" margin={10} />
      <div className="muted-link">Don't have an account?{" "}
        <a href="#" className="bold-link" onClick={switchToSignup}>Sign Up</a>
      </div>
    </div>
  )
}

export default LoginForm