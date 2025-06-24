import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo2.png";
import { Fade } from "react-reveal";
import Username from "../assets/username.png";
import Password from "../assets/password.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [register, setRegister] = useState(false);
  const registerAccept = () => {
    return setRegister(true);
  };
  const registerRemove = () => {
    return setRegister(false);
  };

  return (
    <Container>
      <Fade>
        <div className="Logo">
          <Fade left duration={1000}>
            <img src={Logo} alt="logo" className="logo" />
          </Fade>
        </div>
        <div className="credentials">
          <h1 className="title">Login</h1>

          <form action="" className="login">
            <div className="credential-main">
              <div className="credential-image">
                <img src={Username} alt="username" />
              </div>
              <input
                type="email"
                name="email"
                className="username"
                placeholder="username / email"
              />
            </div>
            <div className="credential-main">
              <div className="credential-image">
                <img src={Password} alt="username" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="password"
                className=""
              />
            </div>
            <div className="submit">
              <Link to="/dash"><input type="button" value="Login" className="login-button" /></Link>
            </div>
          </form>

          <p className="register-link">
            New as an admin? <span onClick={registerAccept}>Register</span>
          </p>
          {register && (
            <Fade>
              <div className="registration">
                <h1 className="title1">SignUp</h1>

                <form action="" className="login">
                  <div className="credential-main1">
                    <div className="credential-image1">
                      <img src={Username} alt="username" />
                    </div>
                    <input type="text" name="fullname" placeholder="fullname" />
                  </div>

                  <div className="credential-main2">
                    <div className="date">
                      <input type="date" name="" id="" />
                    </div>
                    <div className="select">
                      <select name="Gender" className="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="credential-main2">
                    <div className="date">
                      <input type="text" name="Location" placeholder="Enter your Location" />
                    </div>
                    <div className="select">
                      <input type="text" name="Contact" placeholder="Contact" />
                    </div>
                  </div>

                  <div className="credential-main1">
                    <div className="credential-image1">
                      <img src={Password} alt="username" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className=""
                    />
                  </div>

                  <div className="credential-main1">
                    <div className="credential-image1">
                      <img src={Password} alt="username" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className=""
                    />
                  </div>

                  <div className="submit1">
                    <input
                      type="button"
                      value="Register"
                      className="login-button"
                    />
                  </div>
                </form>
                <p className="register-link">
                  Already Registered?{" "}
                  <span onClick={registerRemove}>Sign In</span>
                </p>
              </div>
            </Fade>
          )}
        </div>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  .Logo {
    width: 100%;
  }
  .logo {
    width: 600px;
    padding: 40% 10% 10% 10%;
  }
  .credentials {
    background: green;
    width: 100%;
    height: 100vh;
  }
  .title {
    color: white;
    font-family: "Poppins", sans-serif;
    text-align: center;
    padding: 20% 0% 3% 0%;
    font-size: 50px;
  }
  .login {
    padding: 0% 16%;
  }
  .credential-main {
    display: flex;
    width: 100%;
    padding: 4% 0%;
    input {
      width: 400px;
      height: 55px;
      padding: 0% 3%;
      border: none;
      border-radius: 10px;
      outline: none;
      color: gray;
      font-family: "Poppins", sans-serif;
    }
  }
  .credential-image {
    padding: 2% 2%;
    img {
      width: 30px;
    }
  }
  .submit {
    padding: 7% 23%;
    .login-button {
      width: 300px;
      height: 55px;
      border: none;
      border-radius: 10px;
      font-size: 25px;
      font-weight: bold;
      color: green;
    }
    .login-button:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .register-link {
    text-align: center;
    color: white;
    font-family: "Poppins", sans-serif;
    span {
      color: yellow;
    }
    span:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .registration {
    position: absolute;
    top: 0;
    background: green;
    width: 100%;
    height: 100%;
  }
  .title1 {
    color: white;
    font-family: "Poppins", sans-serif;
    text-align: center;
    padding: 5% 0% 1% 0%;
    font-size: 50px;
  }
  .credential-main1 {
    display: flex;
    width: 100%;
    padding: 4% 0%;
    input {
      width: 400px;
      height: 50px;
      padding: 0% 3%;
      border: none;
      border-radius: 10px;
      outline: none;
      color: gray;
      font-family: "Poppins", sans-serif;
    }
    
  }
  .credential-main2 {
    display: flex;
    width: 30%;
    padding: 4% 6.5%;
    .date{
      padding: 0% 10%;
      input {
      width: 200px;
      height: 50px;
      padding: 0% 5%;
      border: none;
      border-radius: 10px;
      outline: none;
      color: gray;
      font-family: "Poppins", sans-serif;
      }
    }
    .select{
      padding: 0% 10%;
      .gender{
        width: 200px;
        height: 50px;
        padding: 0% 10% 0% 5%;
        border: none;
        border-radius: 10px;
        outline: none;
        color: gray;
        font-family: "Poppins", sans-serif; 
        appearance: none; 
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url("data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")
        no-repeat right 10px center;
        background-color: white;
        background-size: 20px;
        cursor: pointer;
      }
      input{
        width: 190px;
        height: 50px;
        padding: 0% 0% 0% 5%;
        border: none;
        border-radius: 10px;
        outline: none;
        color: gray;
        font-family: "Poppins", sans-serif; 
      }
    }  
    
  }
    
  .credential-image1 {
    padding: 2% 2%;
    img {
      width: 30px;
    }
  }
    .submit1 {
    padding: 3% 23%;
    .login-button {
      width: 300px;
      height: 55px;
      border: none;
      border-radius: 10px;
      font-size: 25px;
      font-weight: bold;
      color: green;
    }
`;

export default Home;
