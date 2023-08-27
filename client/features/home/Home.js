import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Link, Route, useNavigate } from "react-router-dom";
import AOS from "aos";
import { resetRecipes } from "../../store/allRecipesSlice";

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  AOS.init();

  useEffect(() => {
    dispatch(resetRecipes());
  }, []);

  const handleGetStarted = () => {
    navigate("/ingredients");
  };

  return (
    <div className="home-container">
      <h1 className="title" data-aos="zoom-in">
        Planty!
      </h1>

      <div className="description" data-aos="zoom-in">
        <p>
          Planty is a recipe search tool. Just enter the ingredients you have in
          your kitchen and Planty will give you delicious suggestions for any
          meal!
        </p>
        <p>...and the best part? It's all plant based!</p>
      </div>

      <button className="get-started-button" onClick={handleGetStarted}>
        Let's get cooking!
      </button>
    </div>
  );
};

export default Home;
