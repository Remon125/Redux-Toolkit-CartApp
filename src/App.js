
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Products />}  />
        <Route path='/Carts' element={<Cart />}  />
      </Routes>
    </div>
  );
}

export default App;
