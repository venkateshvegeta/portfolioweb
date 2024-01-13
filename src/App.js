import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { NavigationPane } from './components/Navigation';
import TicTacToe from './components/Games/TicTacToe';
import { Playground } from './pages/playground';
function App() {
  return (
   <HashRouter>
    <div className="App">
    <NavigationPane />
      <Routes>
        <Route exact path='/' element={<h2>Home Page</h2>}>
        </Route>
        <Route exact path='Playground' element={<TicTacToe />}></Route>
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
