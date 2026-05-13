import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Home from './pages/Home/Home';
import Headingnav from './Components/Headings/HeadingNav'
import Product from './pages/Product/Product';
function App() {
  return (
    
    <div style={{overflow:'hidden'}}>
    <Headingnav/>
    <Product/>
    {/* <Home/> */}
    </div>
    
    
  );
}

export default App;
