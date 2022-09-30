import { Box, Grid, GridItem, Image, Text, HStack} from '@chakra-ui/react';
import React from 'react';
import "./grid.css";

const Grid2 = (props) => {

    const {src4, src5, src6, text1, text2, GridData2, GridData3}= props;
    return (
        <Box width='73%' margin='auto' mt='4' mb='8'>
            <Grid
                templateAreas={`"b1 b2 b3"`}
                gridTemplateRows={'1fr'}
                gridTemplateColumns={'repeat(3, 1fr)'}
                h='560px'
                gap='4'
                >
                    
                    <GridItem area={'b1'} >
                    
                        <Grid 
                            templateAreas={`"c1"
                                            "c2"
                                            "c3"
                                            "c4"
                                            "c5"`}
                            gridTemplateRows={' 62px 240px repeat(3, 1fr)'}
                            gridTemplateColumns={'repeat(1, 1fr)'}
                            h='100%'
                            gap='0'>
                            <GridItem area={'c1'}>
                                <HStack margin='15px auto' whiteSpace='nowrap' gap='1' mb='15px' width='100%'>
                                    <Text  fontSize='22px' color= '#133b5a' letterSpacing='-.23px' fontWeight='600' >{text1}</Text>
                                    <Box borderBottom='1px solid #133b5a' height='12px' width="90%" ></Box>
                                </HStack>
                            </GridItem>
                            {GridData2.map((item)=> (
                                <GridItem key={item.id} area={item.id} className="gridStyle2" >
                                    <div>
                                        <Image src={item.img}/>
                                        <Text>{item.title}</Text>
                                    </div>
                                </GridItem>
                            ))}
                            
                        </Grid>
                    </GridItem>
                    <GridItem area={'b2'} >
                    
                        <Grid 
                            templateAreas={`"c1"
                                            "c2"
                                            "c3"
                                            "c4"
                                            "c5"`}
                            gridTemplateRows={' 62px 240px repeat(3, 1fr)'}
                            gridTemplateColumns={'repeat(1, 1fr)'}
                            h='100%'
                            gap='0'>
                            <GridItem area={'c1'}>
                                <HStack margin='15px auto' whiteSpace='nowrap' gap='1' mb='15px' width='100%'>
                                    <Text  fontSize='22px' color= '#133b5a' letterSpacing='-.23px' fontWeight='600'>{text2}</Text>
                                    <Box borderBottom='1px solid #133b5a' height='12px' width="90%" ></Box>
                                </HStack>
                            </GridItem>
                            {GridData3.map((item)=> (
                                <GridItem key={item.id} area={item.id} className="gridStyle2" >
                                    <div>
                                        <Image src={item.img}/>
                                        <Text>{item.title}</Text>
                                    </div>
                                </GridItem>
                            ))}
                            
                        </Grid>
                    </GridItem>
                    <GridItem area={'b3'} >
                        <Box mt='62px'>
                            <Image width='100%' src={src4}/>
                            <Image mt='16px' width='100%' src={src5}/>
                            <Image mt='16px' width='100%' src={src6}/>
                        </Box>
                        <Box>
                            <Image />
                        </Box>
                    </GridItem>
            </Grid>
        </Box>
    );
}

export default Grid2;
