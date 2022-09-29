import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Headlines = () => {
    return (
        <Box whiteSpace='nowrap' mt='0' width='73%' margin='auto' p='0.5'>
            <Flex gap='2' cursor='pointer'>
                <Text padding='0 10px 0 0' fontSize='12px' fontWeight='700' color='#ff001f'>TRENDING TODAY</Text>
                <Text padding='0 10px 0 0' fontSize='12px' color='#828282'>CORONAVIRUS</Text>
                <Text padding='0 10px 0 0' fontSize='12px' color='#828282'>RUSSIA-UKRAINE CRISIS</Text>
                <Text padding='0 10px 0 0' fontSize='12px' color='#828282'>BHARAT JODO YATRA</Text>
                <Box padding='2px 10px 0 0' ><Image w='25%' src='https://www.thehindu.com/theme/images/th-online/housing.png' alt='housing' /></Box>
            </Flex>
        </Box>
    );
}

export default Headlines;
