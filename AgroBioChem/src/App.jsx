import { style } from "framer-motion/client";
import React from "react";
import styled from "styled-components";
import Logo from "./assets/Logo.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <div className="key-main">
        <img src={Logo} alt="logo" className="logo-main" />
        <form action="" >
          <div className="key-sub">
            <input
            type="text"
            name="key"
            className="key"
            placeholder="Enter the Key"
          />
          </div>
          <div className="key-sub1">
            <Link to="/authen"><input type="button" value="Connect" className="key-button"/></Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  display: flex;
  height: 100vh;
  justify-content: center; 
  align-items: center;
  .logo-main {
    width: 600px;
  }
  .key-sub {
    padding: 5% 20%;
    .key {
      width: 380px;
      height: 55px;
      padding: 0% 10%;
      border: none;
      border-radius: 10px;
      outline: none;
      color: grey;
      text-align: center;
      background: rgb(255, 255, 255);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
      font-family: "Poppins", sans-serif;
    }
    .key::placeholder {
      color: grey;
    }
  }
  .key-sub1{
    padding: 5% 33%;
    .key-button {
      width: 300px;
      height: 55px;
      padding: 0% 10%;
      border: none;
      border-radius: 10px;
      outline: none;
      color: white;
      text-align: center;
      background: rgba(78, 148, 12, 0.84);
      font-family: "Poppins", sans-serif;
    }
    .key-sub1::placeholder {
      color: white;
    }
    .key-button:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
export default App;
