// import React from 'react';
// import '../../App.css';
// import '../SignUp.css';

// export default function SignUp() {
//   return (
//     <div className="register">
//   <span className="registerTitle">Register</span>
//   <form className="registerForm">
//     <label>Username</label>
//     <input className="registerInput" type="text" placeholder="Enter your username..." />
//     <label>Email</label>
//     <input className="registerInput" type="text" placeholder="Enter your email..." />
//     <label>Password</label>
//     <input className="registerInput" type="password" placeholder="Enter your password..." />
//     <button className="registerButton">Register</button>
//   </form>
//     <button className="registerLoginButton">Login</button>
// </div>
// );
// }


import React, {useState} from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import '../SignUp.css';
import http from '../../http_common';


const FormSignup = ({ submitForm }) => {
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  const [email,setEmail] = useState();
  const [name,setName] = useState();
const [password,setPassword] = useState();
const [confirmPassword,setConfirmPassword] = useState();

const handleChangeOnEmail = (e) => {
  setEmail(e.target.value);
};

const handleChangeOnUsername = (e) => {
  setName(e.target.value);
};

const handleChangeOnPassword = (e) => {
  setPassword(e.target.value);
};

const handleChangeOnConfirmPassword = (e) => {
  setConfirmPassword(e.target.value);
};

const handleSubmit = async(e) => {
  e.preventDefault();
  console.log('login submit ', e)
  if(password != confirmPassword){
    console.log('password doesn\'t matched.')
    return;
  }
  let registerData = {
    name,
    email,
    password
  };
  const userCred = await http.post('/register',registerData);
  console.log('user cred: ', userCred);
}

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your username'
            value={name}
            onChange={handleChangeOnUsername}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={handleChangeOnConfirmPassword}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/Login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;