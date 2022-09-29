import './App.css';
import Navbar from './Components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from './Components/Carousel/LeafCarousel';
import Covid from './Components/Covid/Covid';

function App() {



  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Covid/>
    </div>
  );
}

export default App;
