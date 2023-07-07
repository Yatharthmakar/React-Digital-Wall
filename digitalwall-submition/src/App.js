import './App.css';
import Board from '../src/components/Board'
import PostBoard from './components/PostBoard';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BoardDetails from "./context/BoardDetails";

function App() {

  return (
    <BoardDetails>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Board/>}/>
            <Route path="/postboard" element={<PostBoard/>}/>
          </Routes>
        </BrowserRouter>
    </BoardDetails>
  );
}

export default App;
