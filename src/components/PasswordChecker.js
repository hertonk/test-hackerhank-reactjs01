import React, { useState, useEffect } from "react";
import { PasswordStrength } from "./PasswordStrength";

const PasswordChecker = () => {

  const [ password, setPassword ] = useState('')
  const [ showPassword, setShowPassword ] = useState(false)
  const [ score, setScore ] = useState(0)
  const [ color, setColor ] = useState('white')
  const [ strength, setStrength ] = useState('Weak')
  const [ verifyLength, setVerifyLength ] = useState(false)
  const [ verifyLower, setVerifyLower ] = useState(false)
  const [ verifyUpper, setVerifyUpper ] = useState(false)
  const [ verifyNumber, setVerifyNumber ] = useState(false)
  const [ verifySpecial, setVerifySpecial ] = useState(false)

  function evaluationStrongPassword(){

    if(password.length >= 8){
      if(!verifyLength){
        setScore(score+1)
        setVerifyLength(true)
      }
    }
    
    if(/[A-Z]/.test(password)){
      if(!verifyUpper){
        setScore(score+1)
        setVerifyUpper(true)
      }
    }

    if(/[a-z]/.test(password)){
      if(!verifyLower){
        setScore(score+1)
        setVerifyLower(true)
      }
    }
    
    if(/\d/.test(password)){
      if(!verifyNumber){
        setScore(score+1)
        setVerifyNumber(true)
      }
    }
    
    if (/[^A-Za-z0-9]/.test(password)) {
      if(!verifySpecial){
        setScore(score+1)
        setVerifySpecial(true)
      }
    }
  }

  useEffect(() => {
    evaluationStrongPassword()

    if(score <= 2){
      setStrength('Weak')
      setColor('red')
    } else if(score >= 2 && score <= 4){
      setStrength('Moderate')
      setColor('orange')
    } else if(score >= 5){
      setStrength('Strong')
      setColor('green')
    }

    if(password === ''){
      setVerifyLength(false)
      setVerifyUpper(false)
      setVerifyLower(false)
      setVerifyNumber(false)
      setVerifySpecial(false)
      setScore(0)
    }

  }, [password])

  function handleShowPassword(){
    setShowPassword(!showPassword)
  }

  function handleClearPassword(){
    setPassword(password ? '' : '')
  }

  return (
    <div className="layout-column align-items-center justify-content-center py-40 mt-100">
      <div className="card w-50 px-75 py-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Enter Your Password</h2>
          <div className="layout-column mb-10">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              data-testid="passwordInput"
              value={password}
              onChange={ e => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="py-10" data-testid="buttonDiv">
          <button onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'} Password</button>
          <button onClick={handleClearPassword}>Clear Password</button>
        </div>
      </div>
      <div className="w-50 py-20">
        <PasswordStrength color={color} strength={strength} />
      </div>
    </div>
  );
};

export default PasswordChecker;
