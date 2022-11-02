import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductGrid from './Pages/Store/ProductGrid';
import Header from './component/Shared/Header';
import CartState from './context/Cart/CartState';
import Footer from './component/Shared/Footer';
import Cart from './Pages/Carts/Cart';
import About from './Pages/About/About'
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom'


function App() {

 
  return (

    <div>
      <CartState>
        <Router>
            <Header />

            <Routes>
              <Route path='/ProductGrid'  element={<ProductGrid/>}/>
              <Route path='/About'  element={<About/>}/>
              
            </Routes>
            <Cart/>

            <Footer />

        </Router>
      </CartState>
    </div>

  );
}

export default App;
