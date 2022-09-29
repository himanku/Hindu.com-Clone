import React from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';
const BottomLinks = () => {
    return (
        <Box width='73%' margin='auto' mt='2' padding='4px' top='0'     borderTop= 'solid 1px #c8c8c3'>
            <Flex h='40px' gap='1' color='#5a5a5a'>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >HOME</Text>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >NEWS</Text>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >CORONAVIRUS</Text>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >OPINION</Text>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >SPORT</Text>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >BUSINESS</Text>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >CROSSWORD+</Text>
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >COUPONS</Text> 
                <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >ENTERTAINMENT</Text> 
            </Flex>       
        </Box>
        
    );
}

export default BottomLinks;