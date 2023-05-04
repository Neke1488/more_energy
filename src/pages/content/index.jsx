import React from "react";

import Sidebar from '../../components/sidebar/sidebar';
import Coaches from '../coaches';
import Clients from '../clients';
import Exercises from '../exercises';
import Recipes from '../recipes';
import Articles from '../articles';
import Feel_best from '../feel_best';
import Eating_level from '../eating_level';
import Stickers from '../stickers';
import Sample_menus from '../sample_menus';
import Header from '../../components/header';
import { Route, Routes } from "react-router-dom";

const Content = () =>{
    return(
        <div>
         <Header></Header>
          <Sidebar> 
          <Routes>
             <Route path="clients" element={<Clients />}></Route>
              <Route path="coaches" element={<Coaches />}></Route>
              <Route path="exercises" element={<Exercises />}></Route>
              <Route path="recipes" element={<Recipes />}></Route>
              <Route path="articles" element={<Articles />}></Route>
              <Route path="sample_menus" element={<Sample_menus />}></Route>
              <Route path="feel_best" element={<Feel_best />}></Route>
              <Route path="eating_level" element={<Eating_level />}></Route>
              <Route path="stickers" element={<Stickers />}></Route>
        </Routes>
          </Sidebar>
        </div>
    )
}

export default Content