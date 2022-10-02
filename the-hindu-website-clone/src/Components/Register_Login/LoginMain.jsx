import React from 'react';
import BottomLinks from '../Footer/BottomLines';
import Footer from '../Footer/Footer';
import Ads from '../Header/Ads';
import Header from '../Header/Header';
import Navlinks from '../Header/Navlinks';
import Login from './Login';

const LoginMain = () => {
    const display2={
        display: "block",
        margin: "auto",
        src: 'https://tpc.googlesyndication.com/simgad/14060179353333889470?',
        width: "70%",
        backgroundColor: "white",
    }
    const css={
        left: "0",
        right: "0",
        src: "https://tpc.googlesyndication.com/simgad/16296423811896506465"
    }
    return (
        <div style={{backgroundColor: "white", marginTop: "-12px"}}>
            <Header
              width={display2.width}
              display={display2.display}
              margin={display2.margin}
              src={`https://www.thehindu.com/theme/images/th-online/logo.png`}
          />
            <Navlinks bgColor={display2.backgroundColor}/>
            <Login/>
            <BottomLinks/>
            <Footer/>
            <Ads src={css.src} left={css.left}/>
            <Ads src={css.src} right={css.right}/>
        </div>
    );
}

export default LoginMain;
