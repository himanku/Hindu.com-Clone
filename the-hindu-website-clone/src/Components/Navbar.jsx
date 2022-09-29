import React, { Component } from 'react';
import Logo from './Header/Logo';
import Header from './Header/Header';
import Ads from './Header/Ads';
import Navlinks from './Header/Navlinks';
import { Flex} from '@chakra-ui/react';
import Headlines from './Body/Headlines';
import Boxes from './Footer/Boxes';
import BottomLinks from './Footer/BottomLines';
import Footer from './Footer/Footer';
import Card from './Carousel/LeafCarousel';


const Navbar = () => {
    const style={
        display: "none",
        width: "70%",  
    }
    const display2={
        display: "block",
        margin: "auto"
    }
    const css={
        left: "0",
        right: "0"
    }

    
    return (
        <div>
            <Header display={style.display}/>
            <Logo/>
            {/* <Flex>
                <Ads left={css.left}/>
                <Navlinks/>
                <Ads right={css.right}/>
            </Flex> */}
        
        <Navlinks/>
        <Headlines/>
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

export default Navbar;
