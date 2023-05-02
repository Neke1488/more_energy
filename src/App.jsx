import './App.css';
import {
  Route,
  Routes,
} from 'react-router-dom';
import AuthRootComponent from "./components";
import Sidebar from './components/sidebar/sidebar';
import Coaches from './pages/coaches';
import Clients from './pages/clients';



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
          </Routes>
          </Sidebar>
          
        </div>
  );
}

export default App;
