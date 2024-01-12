import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Nav } from './Components/Nav';
import { Auth } from './Pages/Auth';
import { Cart } from './Pages/Cart';
import { Wishlist } from './Pages/Wishlist';
import { Trending } from './Pages/Trending';

function App() {
  return (
    <>
    <Nav/>
    <div className='MainContainer'>    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path ='/trending' element={<Trending/>}/>

    </Routes>
    </div>
    </>
  );
}

export default App;
