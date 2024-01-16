import {useState,useRef} from 'react'
import Header from '../Header'
import { CheckValidateFormData } from '../../utils/validate'
import './index.css'

const Login = () => {

  const [signIn,setsignIn] = useState(true);
  const [errorMsg,seterrorMsg] = useState(null)

  const email = useRef(null);
  const password = useRef(null)
  


  const handleClickData = ()=>{

      const message = CheckValidateFormData(email.current.value,password.current.value)
      seterrorMsg(message)
  }

  const onClickSignUp = ()=>{

     setsignIn(!signIn)
  }


  return (
    <div className = "LoginContainer">
        <Header/>
        <h1>I Love you</h1>
        <div className = "LoginFormContainer">
          <form className = "FormContainer" onSubmit={(e)=>e.preventDefault()}>
            <h1 className = "signIn-or-signOut-text">{signIn?"Sign In":"Sign Up"}</h1>
            <input ref = {email} className = "Email" type = "text" placeholder = "Email Adress"/><br/>
            <input ref = {password} className = "Password" type = "password" placeholder = "Password"/><br/>
            {errorMsg && <p className = "errorMsg">{errorMsg}</p>}
            <button className = "signIn-btn" onClick = {handleClickData} > {signIn ?"Sign In":"Sign Up"}</button>
            <p onClick = {onClickSignUp} className = "new-to-netflix-text">{signIn ?"New to Netflix? Sign up now.":"Already registered? Sign in Now."}</p>
          </form>
        </div>
    </div>
  )
}

export default Login
