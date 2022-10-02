import Navbar from '../Navbar';
import Card from '../Carousel/LeafCarousel';
import Covid from '../Covid/Covid';
import Grid1 from '../Body/Grid1';
import BottomLinks from '../Footer/BottomLines';
import Footer from '../Footer/Footer';
import Boxes from '../Footer/Boxes';
import Header from '../Header/Header';
import Grid2 from '../Body/Grid2';
import {GridData2} from "../Body/Data/gridData2"
import {GridData3} from "../Body/Data/gridData3"
import BigAd from '../Body/bigAd';
import { gridData1 } from '../Body/Data/gridData1';
import { GridData4 } from '../Body/Data/gridData4';
import { GridData5 } from '../Body/Data/gridData5';
import { GridData6 } from '../Body/Data/gridData6';
import Headlines from '../Body/Headlines'
import Navlinks from '../Header/Navlinks';

function Home () {
    const style={
        src1: "https://tpc.googlesyndication.com/simgad/17103853574280670020",
        src2: "https://www.thehindu.com/theme/images/th-online/puzzle.jpeg",
        src3: "https://tpc.googlesyndication.com/simgad/12340129004741262474",
        src11: "https://tpc.googlesyndication.com/simgad/9131466074289013803",
        src22: "https://www.thehindu.com/education/wzabal/article17481996.ece/alternates/FREE_300/know-your-english-promo",
        src33: "https://tpc.googlesyndication.com/simgad/12340129004741262474",
        src7: "https://tpc.googlesyndication.com/simgad/8097064822213211099",
        src8: "",
        src111: "https://tpc.googlesyndication.com/simgad/16393519461086453489",
        sr222: "",
        src333: "",
        width: "70%", 
        
      }
      const display2={
        display: "block",
        margin: "auto",
        src: 'https://tpc.googlesyndication.com/simgad/14060179353333889470?',
        backgroundColor: "#f5f5f5",
    }
    
      return (
        <div className="App">
          <Navbar/>
          <Navlinks bgColor={display2.backgroundColor}/>
          <Headlines/>
          <Grid1 
            gridData1={gridData1}
            src1={style.src1}
            src2={style.src2}
            src3={style.src3}
          />
          <Covid/>
          <Card title="Top Picks"/>
          <Grid2 
            GridData2={GridData2}
            GridData3={GridData3} 
            text1="Science" 
            text2="Technology"
            src4={style.src11}
            src5={style.src22}
            src6={style.src33}
            />
            <BigAd/>
            <Grid1 
            gridData1={GridData4}
            src1={style.src7}
            src2={style.src3}
            src3={style.src2}
          />
          <Grid2 GridData2={GridData5}
            GridData3={GridData6} 
            text1="World" 
            text2="Sports"
            src4={style.src111}
            src5={style.src2}
            src6={style.src3}
            />
            <Headlines/>
            <Card title="Trending"/>
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

export default Home;