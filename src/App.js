import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";


import Product from "./customer/components/Product/Product";
function App() {
  return (
    <div className="App">
      
      <Navigation />
     
      
      <HomePage />
      <Product />
      <Footer/>    
      
    </div>
  );
}

export default App;
