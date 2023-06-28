// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Chart from './components/Chart';
import "./assets/css/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <SideMenu />
          <Routes>
            <Route exact path="/" element={<Chart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
