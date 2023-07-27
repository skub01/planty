import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Link, Route, useNavigate } from 'react-router-dom';

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/ingredients');
  };

  return (
    <div>
      <h1>Planty</h1>

      <h4>Planty is a recipe search tool. Just enter the ingredients you have in your kitchen and Planty will give you delicious suggestions for any meal!</h4>

      <h4>...and the best part? It's all plant based!</h4>

      <button onClick={handleGetStarted}>Get started</button>
    </div>
  );
};

export default Home;
