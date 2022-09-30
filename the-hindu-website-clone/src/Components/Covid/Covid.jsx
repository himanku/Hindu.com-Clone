import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import cov from "./Covid.PNG"

const Covid = () => {
    return (
        <Box width='73%' margin='auto' mt='4'>
            <Image width='100%' src={cov} />
        </Box>
        
    );
}

export default Covid;
