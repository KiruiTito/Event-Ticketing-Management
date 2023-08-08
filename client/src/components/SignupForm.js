import React, { useState } from 'react';
import {useNavigate  } from "react-router-dom";
// import "./signup.css"

const SignUpForm = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState ({
    username: "",
    email: "",
    password: "",
    
    
  });
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true)
    fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: 'application/json'

        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
            response.json().then((data) =>  {
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/login");
            setIsLoading(false);
          });
        
      })
      .catch((err) => console.error(err))
      
  }

  return (
    <div className="form-container">
      <h1 className='h1signup'> Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        </div>
         
    
    {!isLoading &&
                   <button type="submit" className='signup-button'>
                        {" "}  <span>Sign Up</span>
                      </button>}
                      {isLoading &&
                   <button type="submit" className="login-button">
                       
                      </button>}

                       


                      
      </form>
    </div>
  );
};

export default SignUpForm;