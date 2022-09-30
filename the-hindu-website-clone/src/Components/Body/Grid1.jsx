import { Box, Grid, GridItem, Image, Text} from '@chakra-ui/react';
import React from 'react';
import { gridData1 } from './Data/gridData1';
import "./grid.css";

const Grid1 = (props) => {

    const {src1, src2, src3}= props;
    return (
        <Box width='73%' margin='auto' mt='4' >
            <Grid
                templateAreas={`"b1 b2"`}
                gridTemplateRows={'530px'}
                gridTemplateColumns={'1fr 310px'}
                h='530px'
                gap='4'
                >
                    <GridItem area={'b1'}>
                        <Grid 
                            templateAreas={`"a1 a2"
                                            "a1 a3"
                                            "a1 a4"
                                            "a5 a6"`}
                            gridTemplateRows={'repeat(4, 1fr)'}
                            gridTemplateColumns={'repeat(2, 1fr)'}
                            h='100%'
                            gap='4'>
                            {gridData1.map((item)=> (
                                <GridItem className="gridStyle" key={item.id} area={item.id} backgroundColor='white'>
                                    <div >
                                        <img src={item.img} alt="img"/>
                                        <Text  ml='4' mr='1' >
                                            <Text fontSize='12px' color='#133b5a' fontWeight='600' fontFamily="Fira Sans" mt='2'>
                                                {item.category}
                                            </Text>
                                            <Text className='textStyle'>
                                                {item.title}
                                            </Text>
                                        </Text>
                                    </div>
                                        
                                </GridItem>
                            ))}
                            
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Image width='100%' src={src1}/>
                            <Image mt='16px' width='100%' src={src2}/>
                            <Image mt='16px' width='100%' src={src3}/>
                        </Box>
                        <Box>
                            <Image />
                        </Box>
                    </GridItem>
            </Grid>
        </Box>
    );
}

export default Grid1;
