import React from 'react';
import { Image, Box} from '@chakra-ui/react';
const Ads = (props) => {
    const {left, right} = props;
    return (
        <Box position='fixed' top='140' left={left} right={right}>
            <Box m='3' mt='4' w='164px'  border="1px solid black" >
                <Image display='block' h='100vh' w='100%' src='https://tpc.googlesyndication.com/simgad/14060179353333889470?' alt="ad-img" />
            </Box>
        </Box>
        
            
    );
}

export default Ads;
