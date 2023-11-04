import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";

import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div style={{height:'100vh', width: '100%'}} className="d-flex flex-column">
 
        <MyNavbar/>
        <Home/>
        <Footer />
  
    </div>
  );
}

export default App;
