import './App.css';
import {
  Route,
  Routes,
} from 'react-router-dom';
import AuthRootComponent from "./components";

function App() {
    return (
        <div className="App">
          <Routes>
              <Route path="login" element={<AuthRootComponent />}></Route>
              <Route path="registration" element={<AuthRootComponent />}></Route>
          </Routes>
        </div>
  );
}

export default App;
