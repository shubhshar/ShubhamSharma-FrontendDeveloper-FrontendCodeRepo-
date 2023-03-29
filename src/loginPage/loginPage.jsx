import React,{useState} from "react";

const LoginPage=()=>{
  const initailVal={email:"",password:""};

const [loginVal,setLoginVal]=useState({initailVal});

const handleChange=(e)=>{
const {name,value}=e.target
setLoginVal({...loginVal,[name]:value})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(loginVal)
  setLoginVal({...loginVal})
  setLoginVal({email:"",password:""})
  
}

  return <>
  <div className="loginContainer">
    <div className="title">Login</div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
        <span>Email</span>
        <input type="text" placeholder="Email" name="email" onChange={handleChange} value={loginVal.email} required/>
        </div>
        <div className="input-box">
        <span>Password</span>
        <input type="password" placeholder="Password" name="password" onChange={handleChange} value={loginVal.password} required/>
        </div>
        <button>Log me In</button>
      </form>
    </div>
  </div>
  </>
}

export default LoginPage