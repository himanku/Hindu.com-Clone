import './App.css';
import Navbar from './Components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from './Components/Carousel/LeafCarousel';
import Covid from './Components/Covid/Covid';
import Grid1 from './Components/Body/Grid1';
import BottomLinks from './Components/Footer/BottomLines';
import Footer from './Components/Footer/Footer';
import Boxes from './Components/Footer/Boxes';
import Header from './Components/Header/Header';
import Grid2 from './Components/Body/Grid2';
import {GridData2} from "./Components/Body/Data/gridData2"
import {GridData3} from "./Components/Body/Data/gridData3"

function App() {
  const style={
    src1: "https://tpc.googlesyndication.com/simgad/17103853574280670020",
    src2: "https://www.thehindu.com/theme/images/th-online/puzzle.jpeg",
    // src2: "https://tpc.googlesyndication.com/simgad/9564559152148849490"
    src3: "https://tpc.googlesyndication.com/simgad/12340129004741262474",
    src4: "https://tpc.googlesyndication.com/simgad/9131466074289013803",
    src5: "https://www.thehindu.com/education/wzabal/article17481996.ece/alternates/FREE_300/know-your-english-promo",
    src6: "https://tpc.googlesyndication.com/simgad/12340129004741262474",
    width: "70%", 
    
  }
  const display2={
    display: "block",
    margin: "auto",
    src: 'https://tpc.googlesyndication.com/simgad/14060179353333889470?'
}

  return (
    <div className="App">
      <Navbar/>
      <Grid1 src1={style.src1}
        src2={style.src2}
        src3={style.src3}
      />
      <Card/>
      <Covid/>
      <Grid2 GridData2={GridData2}
        GridData3={GridData3} 
        text1="Science" 
        text2="Technology"
        src4={style.src4}
        src5={style.src5}
        src6={style.src6}
        />
      <Header
          width={style.width}
          display={display2.display}
          margin={display2.margin}
          src={`https://www.thehindu.com/theme/images/th-online/logo.png`}
      />
      <Boxes/>
      <BottomLinks/>
      <Footer/>
    </div>
  );
}

export default App;
