// import React from "react";
// import "../../App.css";
// import "../login.css";

// export default function Login() {
//   return (
//     <form>
//            <div className='form-inputs'>
//           <label className='form-label'>Username</label>
//           <input
//             className='form-input'
//             type='text'
//             name='username'
//             placeholder='Enter your username'
//             value={values.username}
//             onChange={handleChange}
//           />
//           {errors.username && <p>{errors.username}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Email</label>
//           <input
//             className='form-input'
//             type='email'
//             name='email'
//             placeholder='Enter your email'
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password'
//             placeholder='Enter your password'
//             value={values.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//     </form>
    // <form className="register">
    //   <h3 className="form-title">Log in</h3>

    //   <div className="form-group">
    //     <label>Email</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       placeholder="Enter email"
    //     />
    //   </div>

    //   <div className="form-group">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       placeholder="Enter password"
    //     />
    //   </div>

    //   <div></div>
    //   <button type="submit" className="loginButton">
    //     Login{" "}
    //   </button>
    // </form>
//   );
// }

// //   <div className='signup_form container'>
// //     <div className='row'>
// //       <div className='col-lg-3 col-md-3'></div>
// //       <div className='col-lg-6 col-md-6'>
// //         <div className='form'>
// //     <div class="mb-3 mt-4">
// //   <label for="exampleFormControlInput" class="form-label">Full Name</label>
// //   <input type="text" class="form-control" id="exampleFormControlInput" placeholder="full name"/>
// // </div>
// // <div class="mb-3 mt-4">
// //   <label for="exampleFormControlInput1" class="form-label">Email address</label>
// //   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// // </div>
// // </div>
// // <div className='button'>
// //   <div className='btn btn-lg'>submit</div>
// // </div>
// // </div>
// // <div className='col-lg-3 col-md-3'></div>
// // </div>

// //   </div>
import React, { useContext, useState } from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import '../SignUp.css';
import http from '../../http_common';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history=useHistory()
const[user,setUser]=useContext(UserContext)
const [email,setEmail] = useState();
const [password,setPassword] = useState();

const handleChangeOnEmail = (e) => {
  setEmail(e.target.value);
};

const handleChangeOnPassword = (e) => {
  setPassword(e.target.value);
};

const handleSubmit = async(e) => {
  e.preventDefault();
  console.log('login submit ', e)
  let loginData = {
    email,
    password
  };
  const userCred = await http.post('/login',loginData);
  console.log('user cred: ', userCred.data.data);
  setUser(userCred.data.data)
  if(userCred.data.data){
    history.push("/")
  }

}


  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Login to explore more!
        </h1>
        {/* <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div> */}
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={handleChangeOnEmail}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={handleChangeOnPassword}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <button className='form-input-btn' type='submit' onSubmit={Login }> 
                
        </button>
        {/* <span className='form-input-login'>
          Already have an account? Login <a href='/Login'>here</a>
        </span> */}
      </form>
    </div>
  );
};

export default Login;