import React from "react";
import useForm from "react-hook-form";
import axios from "axios";

function RegisterForm() {
  const { register,watch, errors,handleSubmit } = useForm();
  const onSubmit =(data,e)=>{
    const submitData = {
      email: data.email,
      password: data.password
    }
    axios.post('/auth/register',submitData)
      .then(function (response) {
        console.log(response);
        alert("account successfully created!")
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="email" autoComplete = "off" placeholder="Email" ref={register({
            required: 'Required',
            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
            })} />
          {errors.email && errors.email.type && <p> Invalid email address </p>}
        </div>
        <div>
          <input  type = "password" name="password" autoComplete = "off" placeholder="Password" 
            ref={register({ required: 'Required', minLength: 6, maxLength: 15})}
          />
          {errors.password && 
            <p> Password must be between 6 to 15 characters</p>
          }
        </div>
        <div>
          <input type = "password" name="password1" autoComplete = "off" placeholder="Confirm password" 
            ref={register({required: true, validate: (value) => {
              return value === watch('password');
              }})
            } />
          {errors.password1 && 
            <p>Password must match</p>
          }
        </div>
          <input type="submit" value = "Login" />
        <div className = "link">
          <a href = "/login">Login</a>
          <a href = "#">Forgot password? </a>
        </div>
        <div className = "footer">
        <hr/>
        <p>copyright © 2018 Onwards Media Group Pte Ltd</p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
