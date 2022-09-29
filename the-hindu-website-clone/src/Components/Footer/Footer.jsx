import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    const styles={
        padding:'0 7px' ,
        borderRight:'1px solid #7e7c76' ,
        color:'#7e7c76',
        height: '14px',
        whiteSpace: 'nowrap'
    }
    return (
        <Box width='73%' margin='auto' mt='3'>
            <Container maxW='100%' mt='3'>
                <Flex wrap='wrap' gap='1' justifyContent='center' mt='3' fontSize='12px' lineHeight='20px' letterSpacing='-.09px'>
                    <Text whiteSpace='nowrap' color='#133b5a'>THIS SITE</Text>
                    <Box style={styles}>About Us</Box>
                    <Box style={styles}>Terms of Use</Box>
                    <Box style={styles}>Privacy Policy</Box>
                    <Box style={styles}>Contacts</Box>
                    <Box style={styles}>Archive</Box>
                    <Box style={styles}>Print Subscription</Box>
                    <Box style={styles}>ePaper</Box>
                    <Box style={styles}>Digital Subscription</Box>
                    <Box style={styles}>Rss Feeds</Box>
                    <Box style={styles}>Sitemap</Box>
                </Flex>
            </Container>
            <Container maxW='100%' mt='3'>
                <Flex wrap='wrap' gap='1' justifyContent='center' mt='3' fontSize='12px' lineHeight='20px' letterSpacing='-.09px'>
                    <Text whiteSpace='nowrap' color='#133b5a'>GROUP SITES</Text>
                    <Box style={styles}>The Hindu</Box>
                    <Box style={styles}>இந்து தமிழ் திசை</Box>
                    <Box style={styles}>Business Line</Box>
                    <Box style={styles}>BL on Campus</Box>
                    <Box style={styles}>SportStar</Box>
                    <Box style={styles}>Frontline</Box>
                    <Box style={styles}>The Hindu Center</Box>
                    <Box style={styles}>RoofandFloor</Box>
                    <Box style={styles}>STEP</Box>
                    <Box style={styles}>eBooks</Box>
                    <Box style={styles}>Publications</Box>
                    <Box style={styles}>Young World Cup</Box>
                    <Box style={styles}>Images</Box>
                    <Box style={styles}>Classifieds</Box>
                </Flex>
            </Container>
            <Container maxW='100%' mt='3'>
                <Flex wrap='wrap' gap='1' justifyContent='center' mt='3' fontSize='12px' lineHeight='20px' letterSpacing='-.09px'>
                    <Text whiteSpace='nowrap' color='#7e7c76'>CONTACT US</Text>
                    <Text color='#505050'>Copyright© 2022, THG PUBLISHING PVT LTD.</Text>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;
