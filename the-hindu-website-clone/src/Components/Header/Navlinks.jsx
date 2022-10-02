import React from 'react';
import { VStack, Text, Box, HStack, Flex, Spacer, Button } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import {FiMenu} from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navlinks = ({bgColor}) => {
    return (
        <Box backgroundColor={bgColor} zIndex='3' width='73%' margin='auto' mt='2' padding='4px' borderBottom="1px solid #c8c8c3" position='sticky' top='0' >
            <HStack color='#5a5a5a' >
                <Box p='0' mt='0' >
                    <VStack spacing={0} mt='0'>
                        <Text fontSize="10px" color="#505050">MENU</Text>
                        <Icon as={FiMenu} mt='-8' w={7} h={7}/>
                    </VStack> 
                </Box>
                <Flex whiteSpace='nowrap' h='40px' gap='1'>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >TODAY'S PAPER</Text>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >NEWS</Text>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >OPINION</Text>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >BUSINESS</Text>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >SPORT</Text>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >ENTERTAINMENT</Text>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >CROSSWORD+</Text>
                    <Text alignSelf='flex-end' p='1' fontSize='12px' fontWeight='600' color='#828282' >SCIENCE</Text> 
                </Flex>
                <Spacer/>
                <Flex  ml='2' h='40px' gap='2'>
                    <Button fontSize='12px' alignSelf='flex-end' padding='2px 11px' size='sm' color='#fff' backgroundColor='#00419b'>GET TRIAL</Button>
                    <Button fontSize='12px' alignSelf='flex-end' padding='2px 11px' size='sm' color='282828' backgroundColor='#ffc000'>SUBSCRIBE NOW</Button>
                    <Button _hover={{ bg: "blue.900", color: "white" }} fontSize='12px' alignSelf='flex-end' padding='2px 11px' variant='outline' size='sm' colorScheme='blue.600'><Link to="/signup">LOG IN</Link></Button>
                </Flex>           
            </HStack>
        </Box>
        
    );
}

export default Navlinks;
