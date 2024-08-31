import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './componets/Navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ShopcontextProvider from './contex/Shop-contex';
function App() {
  return <div>

<ShopcontextProvider>  
<Router>
      <Navbar/>
      <Routes>
    
      <Route path='/'  element={<Shop/> }   />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </Router>
</ShopcontextProvider>

  </div>
}

export default App;
