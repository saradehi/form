import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import InfoHome from './components/InfoForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/:id" element={<InfoHome></InfoHome>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
