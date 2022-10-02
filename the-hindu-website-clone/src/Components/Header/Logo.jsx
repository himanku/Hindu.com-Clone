import React from 'react';
import dateFormat from "dateformat";
import { Center, Container, HStack, Image, Box, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = () => {
    const now = new Date();
    return (
        <Center>
            <Container>
            <Box>
                <Link to="/"><Image w='94%' mt='3' src="https://www.thehindu.com/theme/images/th-online/logo.png" alt='Logo'/></Link>
            </Box>
            <Center mt='2'>
                <HStack fontSize='11.5px' fontWeight='600' gap='2'>
                    <Link color="#133b5a">LATEST NEWS</Link>
                    <Text color='#9b9b9b'>{dateFormat(now, "fullDate").toLocaleUpperCase()}</Text>
                    <Link color="#133b5a">E-PAPER</Link>
                </HStack> 
            </Center>
        </Container>
        </Center>
        
            
    );
}

export default Logo;
