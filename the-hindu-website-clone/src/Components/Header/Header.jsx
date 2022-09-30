import React from 'react';
import {Box, HStack, Input, Icon, Image, Link} from "@chakra-ui/react";
import { SearchIcon,  } from '@chakra-ui/icons';
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, } from "react-icons/ti"
import {BsTelegram} from "react-icons/bs";
import {MdMail, MdPhoneIphone} from "react-icons/md";

const Header = (props) => {
    const {src, display, width, margin} = props;
    return (
        <Box width='73%' margin='auto' mt='4' padding='4px' >
            <HStack color='#5a5a5a' spacing='0' >
                <Box display='flex' justifyContent='center' p='1' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Link href="https://www.facebook.com/thehindu">
                        <Icon w={4} h={4} as={TiSocialFacebook}/>
                    </Link>
                </Box>
                <Box display='flex' justifyContent='center' p='1' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Link href="https://twitter.com/The_Hindu">
                        <Icon as={TiSocialTwitter}/>
                    </Link>
                </Box>
                <Box display='flex' justifyContent='center' p='1' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Link href="https://www.linkedin.com/school/the-hindu/">
                        <Icon as={TiSocialLinkedin}/>
                    </Link>
                </Box>
                <Box display='flex' justifyContent='center' p='1' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Link href="https://instagram.com/the_hindu/?ref=badge">
                        <Icon as={TiSocialInstagram}/>
                    </Link>
                </Box>
                <Box display='flex' justifyContent='center' p='1' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Link href="https://t.me/THnewsupdates">
                        <Icon w={3.5} h={3.5} as={BsTelegram}/>
                    </Link>
                </Box>
                <Box display='flex' justifyContent='center' p='1' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Link href="https://www.thehindu.com/newsletter-subscription/">
                        <Icon w={3.5} h={3.5} as={MdMail}/>
                    </Link>
                </Box>
                <Box display='flex' justifyContent='center' p='1' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Link href="https://www.thehindu.com/social/">
                        <Icon w={3.5} h={3.5} as={MdPhoneIphone}/>
                    </Link>
                </Box>
                <Box display='flex' justifyContent='center' fontSize='10px' p='5px 0px' w='40px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    ePaper
                </Box>
                <Box padding='0 4px' w='400px' h='30px' border='1px solid #c8c8c3' borderTopStyle='none' borderLeftStyle='none'>
                    <Image margin={margin} display={display} src={src} width={width} alt='logo'/>
                </Box>
                <Input pl='2' w='212px' h='30px' placeholder='Search here' size='sm'  borderStyle='none' borderBottom='1px solid #c8c8c3' borderRadius='none'/>
                <Box borderBottom='1px solid #c8c8c3' w='40px' h='30px' >
                    <SearchIcon/>
                </Box>
            </HStack>
        </Box>
    );
}

export default Header;

