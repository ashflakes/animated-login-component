import React, { useContext } from 'react'
import { AccountContext } from './accountContext'
import { Marginer } from '../marginer/marginer';

const SignupForm = () => {
  const { switchToSignin } = useContext(AccountContext)

  return (
    <div className="bottom-container">
      <form className="form-container">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Verify Password" />
      </form>
      <Marginer direction="vertical" margin={10} />
      <button type="submit" className="submit-button">Sign Up</button>
      <Marginer direction="vertical" margin={10} />
      <div className="muted-link">Already have an account?{" "}
        <a 
          href="#" 
          className="bold-link"
          onClick={switchToSignin}
        >Sign In</a>
      </div>
    </div>
  )
}

export default SignupForm