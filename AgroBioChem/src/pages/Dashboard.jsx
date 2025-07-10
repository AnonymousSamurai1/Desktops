import React, { useState } from "react";
import styled from "styled-components";
import Home from "../components/Home";
import Question from "../components/Question";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <div className="navigation">
        <nav>
          <ol>
            <li onClick={() => navigate("home")}>Home</li>
            <li onClick={() => navigate("question")}>Questions</li>
            <li>Products</li>
          </ol>
        </nav>
      </div>

      <div className="category">
        {currentPage === "home" && <Home />}
        {currentPage === "question" && <Question />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  .navigation{
  background: green;
  width: 30%;
  height: 100vh;
  }
  nav {
    display: flex;
    margin: 0;
      height: 100vh;
      justify-content: center;
      align-items: center;
    ol {
      text-decoration: none;
      list-style-type: none;
      li {
        color: white;
        padding: 20% 0%;
        font-family: "Poppins", sans-serif;
      }
      li:hover {
        cursor: pointer;
        color: yellow;
        transform: scale(1.1);
        transition: 0.3s (ease-in-out);
      }
    }
  }
`;
export default Dashboard;
