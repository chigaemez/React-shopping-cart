import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import "bootstrap/dist/css/bootstrap.min.css";
import ProductGrid from './Pages/Store/ProductGrid';
import Header from './component/Shared/Header';
import CartState from './context/Cart/CartState';
import Cart from './Pages/Carts/Cart';
import About from './Pages/About/About'
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import Login from './Pages/Log/Login';


function App() {

 
  return (

    <div>
      <CartState>
        <Router>
          <ToastContainer/>
            <Header />

            <Routes>
              <Route path='/' exact  element={<ProductGrid/>}/>
              <Route path='/About'  element={<About/>}/>

              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Login' element={<Login/>}/>
              
            </Routes>
         


        </Router>
      </CartState>
    </div>

  );
}

export default App;
