
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Api from './Api'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Api/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
