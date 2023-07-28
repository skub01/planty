import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Link, Route, useNavigate } from 'react-router-dom';
import AOS from 'aos';

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const navigate = useNavigate();
  AOS.init();

  const handleGetStarted = () => {
    navigate('/ingredients');
  };

  return (
    <div className="home-container">
      <h1 className="title" data-aos="zoom-in">Planty!</h1>

      <p className="description" data-aos="zoom-in">Planty is a recipe search tool. Just enter the ingredients you have in your kitchen and Planty will give you delicious suggestions for any meal!

      <p>...and the best part? It's all plant based!</p></p>

      <button className="get-started-button" onClick={handleGetStarted}>Get started</button>
    </div>
  );
};

export default Home;
