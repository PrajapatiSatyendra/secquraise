
import './App.css';
import Body from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {Routes,Route} from "react-router-dom"
import Details from './components/Details';
import Home from './components/Home';
import { database } from "./Firebase.js";
import { ref, onValue } from "firebase/database";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Details />}></Route>
        <Route
          path="event/:id"
          element={<Details />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
