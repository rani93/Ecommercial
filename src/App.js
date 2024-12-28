import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Navigation />
     
      
      <HomePage />
      <Router><Footer/></Router>     
      
    </div>
  );
}

export default App;
