import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Boxes = () => {
    const ulStyle={
        color: "#7e7c76", 
        lineHeight: '24px', 
        textTransform: 'capitalize', 
        listStyleType: 'none', 
    }
    const liStyle={
        overflow: 'hidden', 
        textOverflow: 'ellipsis',
        width: '90%', 
        whiteSpace: 'nowrap'
    }
    return (
        <Flex mt='0' gap='5' width='73%' padding='15px' margin='auto' lineHeight='22px' fontSize='12px'>
            <Box width='391px' borderRight= 'dotted 1px #525252'>
                <Text color='#133b5a' letterSpacing='1.2px' fontWeight='600'>TRENDING</Text>
                <ul style={ulStyle}>
                    <li style={liStyle}>Three Ashok Gehlot loyalists get notice; no clarity on Congress president poll</li>
                    <li style={liStyle}>Rajasthan Congress MLA questions Ashok Gehlot’s leadership capacity</li>   
                    <li style={liStyle}>Lt. General Anil Chauhan (retd.) appointed next Chief of Defence Staff</li>   
                    <li style={liStyle}>Sabotage suspected after leaks in Russia’s Nord Stream pipelines</li>   
                    <li style={liStyle}>ECI to apply ‘rule of majority’ while deciding on the real Shiv Sena matter: CEC Rajiv Kumar </li>    
                </ul>
            </Box>
            <Box width='235px' borderRight= 'dotted 1px #525252'>
                <Text color='#133b5a' letterSpacing='1.2px' fontWeight='600'>TRENDING TOPIC</Text>
                <ul style={ulStyle}>
                    <li style={liStyle}>Rajasthan</li>
                    <li style={liStyle}>Russia</li>   
                </ul>
            </Box>
            <Box width='313px'>
                <Text color='#133b5a' letterSpacing='1.2px' fontWeight='600'>TRENDING ON OUR SITES</Text>
                <Text color='#5297cd' fontWeight='600' >BUSINESSLINE</Text>
                <ul style={ulStyle}> 
                    <li style={liStyle}>Nabard</li>
                    <li style={liStyle}>Companies</li>   
                </ul>
            </Box>
        </Flex>
    );
}

export default Boxes;
