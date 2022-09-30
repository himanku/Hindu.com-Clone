import React from 'react';
import Logo from './Header/Logo';
import Header from './Header/Header';
import Navlinks from './Header/Navlinks';


const Navbar = () => {
    const style={
        display: "none", 
        src: 'https://tpc.googlesyndication.com/simgad/12264028490335591544'
    }
    
    // const css={
    //     left: "0",
    //     right: "0"
    // }

    
    return (
        <div>
            <Header display={style.display}/>
            <Logo/>
            {/* <Flex>
                <Ads left={css.left}/>
                <Navlinks/>
                <Ads right={css.right}/>
            </Flex> */}
             {/* <Ads src={style.src}/>
             <Ads src={display2.src}/> */}
            <Navlinks/>
            
            
        </div>
    );
}

export default Navbar;
