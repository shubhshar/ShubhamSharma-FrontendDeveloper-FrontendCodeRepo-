import React ,{useState} from "react";


const RegisterPage=()=>{

  const firstVal={name:"",email:"",password:""}
  const [register, setRegister]=useState({firstVal})

const handleC=(e)=>{
const{name,value}=e.target
setRegister({...register,[name]:value})
}

const handleSub=(e)=>{
  e.preventDefault();
  console.log(register)
  setRegister({...register})
  setRegister({name:"",email:"",password:""})
}

  return<>
    <div className="register-container">
      <div className="title">Register</div>
      <div className="content">
        <form onSubmit={handleSub}>
          <div className="text-field">
            <span>Name</span>
            <input type="text" placeholder="Name" name="name" value={register.name} onChange={handleC} required/>
          </div>
          <div className="text-field">
            <span>Email</span>
            <input type="text" placeholder="Email" name="email"value={register.email} onChange={handleC}required/>
          </div>
          <div className="text-field">
            <span>Password</span>
            <input type="password" placeholder="Password" name="password" value={register.password} onChange={handleC}required/>
          </div>
          <button>Register urself</button>
        </form>
      </div>
    </div>
  </>
}

export default RegisterPage;