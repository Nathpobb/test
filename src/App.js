import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import {Color} from './view/index'
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
          path= '/home'
          element={<Color/>}
          />
          <Route
          path='/test'
          element="hi"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
