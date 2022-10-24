import "../src/components/style.css";
import { WeatherList } from "./components/WeatherList";
import { About } from "./components/About";
import { Notfoundpage } from "./components/Notfoundpage";
import { Blogpage } from "./components/Blogpage";
import {
  Route, Routes, Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Blog</Link>
      </header>
      <Routes>
        <Route path="/" element={<WeatherList />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Blogpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <footer className="footer">
        <p>Olesia 2022</p>
      </footer>
    </div>);
}

export default App;
