import React, {useState} from "react";
import useForm from "react-hook-form";
import axios from "axios";

function LoginForm() {
  const { register, errors,handleSubmit } = useForm();
  const [userEmail, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const onSubmit =(data,e)=>{
    const submitData = {
      email: data.email,
      password: data.password
    }
    axios.post('/auth/login',submitData)
      .then(function (response) {
        setEmail(response.data.user.email);
        setStatus(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if(status === 200){
    return(
      <div>
        <div className = "userEmail">
           {userEmail}!
        </div>
        <div className = "footer">
          <hr/>
          <p>copyright © 2018 Onwards Media Group Pte Ltd</p>
        </div>
      </div>
      )
  } else {
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
          
            <input type="submit" name = "login" value = "Login" />
            {errors.login && 
              <p> Invalid email adress or password!</p>
            }

          <div className = "link">
            <a href = "/">Register</a>
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
};

export default LoginForm;
