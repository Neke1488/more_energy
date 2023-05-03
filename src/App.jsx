import './App.css';
import {
  Route,
  Routes,
} from 'react-router-dom';
import AuthRootComponent from "./components";
import Sidebar from './components/sidebar/sidebar';
import Coaches from './pages/coaches';
import Clients from './pages/clients';
import Exercises from './pages/exercises';
import Recipes from './pages/recipes';
import Articles from './pages/articles';
import Feel_best from './pages/feel_best';
import Eating_level from './pages/eating_level';
import Stickers from './pages/stickers';
import Sample_menus from './pages/sample_menus';



function App() {
    return (
        <div className="App">
          
          <Routes>
              <Route path="login" element={<AuthRootComponent />}></Route>
              <Route path="registration" element={<AuthRootComponent />}></Route>
           
          </Routes>
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
  );
}

export default App;
