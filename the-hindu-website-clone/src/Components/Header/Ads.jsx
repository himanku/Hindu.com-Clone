import React from 'react';
import { Image, Box} from '@chakra-ui/react';
const Ads = (props) => {
    const {left, right, src} = props;
    return (
        <Box top='0' left={left} right={right}>
            <Box m='3' mt='4' w='164px'  border="1px solid black" >
                <Image display='block' h='100vh' w='100%' src={src}  alt="ad-img" />
            </Box>
        </Box>
        
            
    );
}

export default Ads;

//src='https://tpc.googlesyndication.com/simgad/14060179353333889470?' static
//'https://tpc.googlesyndication.com/simgad/12264028490335591544' pref
// https://tpc.googlesyndication.com/simgad/12129398209034142694 pref
// https://tpc.googlesyndication.com/simgad/2230960870752915994

//horizontal- https://tpc.googlesyndication.com/simgad/13537701184570468332
//square- https://tpc.googlesyndication.com/simgad/9131466074289013803