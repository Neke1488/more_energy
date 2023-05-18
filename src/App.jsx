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
import Header from './components/header';
import Content from './pages/content';



function App() {
    return (
        <div className="App">
          

          <Routes>
              <Route path="login" element={<AuthRootComponent />}/>
              <Route path="registration" element={<AuthRootComponent />}/>
              <Route path="content/*" element={<Content />}/>
          </Routes>
        </div>
  );
}

export default App;
