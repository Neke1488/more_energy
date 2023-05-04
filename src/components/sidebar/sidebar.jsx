import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';
import '../../fonts/Roboto-Bold.ttf';
import articles from '../../icons/articles.svg';
import coach from '../../icons/coach.svg';
import exercises from '../../icons/exercises.svg';
import feelBest from '../../icons/feelBest.svg';
import clients from '../../icons/Vector.svg';
import menus from '../../icons/menus.svg';
import eating_level from '../../icons/pie-chart.svg';
import stickers from '../../icons/stickers.svg';
import recipes from '../../icons/recipes.svg';
import logo from '../../icons/Logo.svg'



const Sidebar = ({children}) => {
  const menuItem = [
    {
    path:"clients",
    name:"Clients",
    icon: <img src={clients} className="clients" />,
  },
  {
    path: "coaches",
    name: "Coaches",
    icon: <img src={coach} className="coach" />,
  },
  {
    path: "exercises",
    name: "Exercises",
    icon: <img src={exercises} className="exercises" />,
  },
  {
    path: "recipes",
    name: "Recipes",
    icon: <img src={recipes} className="recipes" />,
  },
  {
    path: "articles",
    name: "Articles",
    icon: <img src={articles} className="articles" />,
  },
  {
    path: "sample_menus",
    name: "Sample menus",
    icon: <img src={menus} className="menus" />,
  },
  {
    path: "feel_best",
    name: "Feel best",
    icon: <img src={feelBest} className="feelbest" />,
  },
  {
    path: "eating_level",
    name: "Eating level",
    icon: <img src={eating_level} className="eating_level" />,
  },
  {
    path: "stickers",
    name: "Stickers",
    icon: <img src={stickers} className="stickers" />,
  },];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
            <div className="pic">
            <img src={logo} className="logo" />
            </div>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
              <br></br>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
    
  );
};

export default Sidebar;
