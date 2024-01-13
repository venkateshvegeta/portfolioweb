import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavigationPane } from './components/Navigation';
import TicTacToe from './components/Games/TicTacToe';
import { Playground } from './pages/playground';
function App() {
  return (
   <BrowserRouter>
    <div className="App">
    <NavigationPane />
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>}>
        </Route>
        <Route exact path='/Playground' element={<TicTacToe />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
