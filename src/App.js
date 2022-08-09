import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductGrid from './Pages/Store/ProductGrid';
import Header from './component/Shared/Header';
import CartState from './context/Cart/CartState';
import Footer from './component/Shared/Footer';
import Cart from './Pages/Carts/Cart';
import About from './Pages/About/About';


function App() {

 
  return (

    <div>
      <CartState>
        <Header />
        <Cart/>
          <ProductGrid />

        <Footer />
      </CartState>
    </div>

  );
}

export default App;
