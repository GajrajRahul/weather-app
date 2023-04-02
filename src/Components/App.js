import './App.css';
import Weather from './Weather/Weather.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forecast from "./Forecast/Forecast.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/forecast/:city" element={<Forecast />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;