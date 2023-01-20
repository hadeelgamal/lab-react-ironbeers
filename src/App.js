import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BeerList from './pages/BeerList';
import RandomBeer from './pages/RandomBeer';
import AddNewBeer from './pages/AddNewBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<BeerList/>}/>
        <Route path='/beers/:beerId' element={<BeerDetails/>}/>
        <Route path='/random' element={<RandomBeer />}/>
        <Route path='/new' element={<AddNewBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
