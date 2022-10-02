import React from 'react';
import Logo from './Header/Logo';
import Header from './Header/Header';
import Ads from './Header/Ads';


const Navbar = () => {
    const style={
        display: "none", 
        src: 'https://tpc.googlesyndication.com/simgad/12264028490335591544'
    }
    const display2={
        src: "https://tpc.googlesyndication.com/simgad/2230960870752915994"
    }
    
    const css={
        left: "0",
        right: "0"
    }

    
    return (
        <div style={{position: "relative"}}>
            <Header display={style.display}/>
            <Logo/>
            {/* <Flex>
                <Ads left={css.left}/>
                <Navlinks/>
                <Ads right={css.right}/>
            </Flex> */}
             <Ads src={style.src} left={css.left}/>
             <Ads src={display2.src} right={css.right}/>
        </div>
    );
}

export default Navbar;
