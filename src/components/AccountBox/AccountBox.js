import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { AccountContext } from './accountContext'
import { Marginer } from '../marginer/marginer'
import LoginForm from './loginForm'
import SignupForm from './signupForm'
import './AccountBox.css'

const backdropVariants = {
  expanded: {
    width: "300%",
    height: "1100px",
    borderRadius: "20%",
    trasnform: "rotate(60deg)" 
  },
  collapsed: {
    width: "190%",
    height: "550px",
    borderRadius: "50%",
    trasnform: "rotate(60deg)" 
  }
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30
}

const AccountBox = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [active, setActive] = useState('signin')

  const playExpandedAnimation = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false)
    }, expandingTransition.duration * 1000 - 1700)
  }

  const switchToSignup = () => {
    playExpandedAnimation()
    setTimeout(() => {
      setActive('signup')
    }, 400)
  }

  const switchToSignin = () => {
    playExpandedAnimation()
    setTimeout(() => {
      setActive('signin')
    }, 400)
  }

  const contextValue = { switchToSignup, switchToSignin }

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="box-container">
        <div className="top-container">
          <motion.div 
            className="backdrop" 
            initial={false} 
            animate={isExpanded ? "expanded" : "collapsed"} 
            variants={backdropVariants} 
            transition={expandingTransition}
          />
          {active === 'signin' && (
            <div className="header-container">
              <h2 className="header-text">Welcome</h2>
              <h2 className="header-text">Back</h2>
              <h5 className="small-text">Please sign in to continue.</h5>
            </div>
          )}
          {active === 'signup' && (
            <div className="header-container">
              <h2 className="header-text">Create</h2>
              <h2 className="header-text">Account</h2>
              <h5 className="small-text">Please sign up to continue.</h5>
            </div>
          )}
        </div>
        <Marginer direction="vertical" margin={10} />
        <div className="inner-container">
          {active === 'signin' && <LoginForm />}
          {active === 'signup' && <SignupForm />}
        </div>
      </div>
    </AccountContext.Provider>
  )
}

export default AccountBox