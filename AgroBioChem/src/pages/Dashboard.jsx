import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashHome from '../components/DashHome';
import DashQuestion from '../components/DashFinance';
import DashSales from '../components/DashSales';
import DashLogistics from '../components/DashLogistics';
import Home from '../assets/Home.png';
import Finance from '../assets/finance.png';
import Sales from '../assets/sales.png';
import Logistics from '../assets/logistics.png';
import HR from '../assets/human.png'
import Data from '../assets/data.png'
import Logout from '../assets/Logout.png';
import { useNavigate } from 'react-router-dom';
import DashData from '../components/DashData';
import DashHuman from '../components/DataHuman';

function Dashboard() {
  const navi = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navi('/authen');
    }
  }, [navi]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navi('/');
  };

  const [currentPage, setCurrentPage] = useState('home');
  const navigate = (page) => {
    setCurrentPage(page);
  };

  const fullname = localStorage.getItem('fullname');

  const abbreviation = fullname
    ? fullname
        .split(' ')
        .map((word) => word[0].toUpperCase())
        .join('')
        .slice(0, 2)
    : 'U';

  return (
    <Container>
      <div className="navigation">
        <nav>
          <div className="logoMain">
            <div className="logo">{abbreviation}</div>
            <p className='logoP'>Welcome, {fullname || ''} 🥳🥳</p>
            </div>
          <ol>
            <li onClick={() => navigate('home')}>
              <div className="icons">
                <img src={Home} alt="home" />
              </div>
              <div className="list">
                <p>Home</p>
              </div>
            </li>

            <li onClick={() => navigate('finance')}>
              <div className="icons">
                <img src={Finance} alt="home" />
              </div>
              <div className="list">
                <p>Finance</p>
              </div>
            </li>

            <li onClick={() => navigate('sales')}>
              <div className="icons">
                <img src={Sales} alt="home" />
              </div>
              <div className="list">
                <p>Sales</p>
              </div>
            </li>
            <li onClick={() => navigate('hr')}>
              <div className="icons">
                <img src={HR} alt="home" />
              </div>
              <div className="list">
                <p>Human Resource</p>
              </div>
            </li>
            <li onClick={() => navigate('logistics')}>
              <div className="icons">
                <img src={Logistics} alt="home" />
              </div>
              <div className="list">
                <p>Logistics</p>
              </div>
            </li>
            <li onClick={() => navigate('data')}>
              <div className="icons">
                <img src={Data} alt="data" />
              </div>
              <div className="list">
                <p>Data Science</p>
              </div>
            </li>
            <div className="logout">
              <li onClick={handleLogout}>
                <div className="icons">
                  <img src={Logout} alt="home" />
                </div>
                <div className="list">
                  <p>Logout</p>
                </div>
              </li>
            </div>
          </ol>
        </nav>
      </div>

      <div className="category">
        {currentPage === 'home' && <DashHome />}
        {currentPage === 'finance' && <DashQuestion />}
        {currentPage === 'sales' && <DashSales />}
        {currentPage === 'hr' && <DashHuman />}
        {currentPage === 'logistics' && <DashLogistics />}
        {currentPage === 'data' && <DashData />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  .navigation {
    background: green;
    width: 30%;
    height: 100vh;
  }
  nav {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    .logoMain{
      position: absolute;
      left: 0;
      top: 0;
      padding: 1%;
      width: 50%;
      display: flex;
      .logo{
        background: white;
        padding: 2%;
        border: none;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        font-family: "Kanit";
        font-weight: bolder;
        color: gray;
      }
      .logoP{
        padding: 2%;
        color: white;
        font-family: "Kanit";
      }
    }
    ol {
      padding-top: 30%;
      text-decoration: none;
      list-style-type: none;
      width: 50%;
      li {
        display: flex;
        color: white;
        padding: 7% 0%;
        width: 100%;
        font-family: 'Poppins', sans-serif;
      }
      li:hover {
        cursor: pointer;
        color: yellow;
        transform: scale(1.1);
        transition: 0.3s (ease-in-out);
      }
      .icons img {
        width: 30px;
        height: 30px;
        padding: 0% 2%;
      }
      .list {
        padding: 3% 5%;
        p {
          font-family: 'Poppins', sans-serif;
        }
      }
      .logout {
        left: 0;
        padding-top: 50%;
      }
    }
  }
`;
export default Dashboard;
