import { ChevronRightIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Input, Text, Button, InputGroup, InputRightElement, Stack, Checkbox, Divider } from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import {BsApple} from "react-icons/bs";

const Signup = () => {

    const redirect = useNavigate();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [input, setInput] = React.useState({
        email: "",
        password: "",
        mobile: ""
    })

    const [data] = React.useState([]);

    const getData = (e) => {
        // console.log(e.target.value)
        const {value,name} = e.target;
        // console.log(value,name)
        setInput(()=> {
            return {
                ...input,
                [name]:value
            }
        })
    }
    const addData = () => {
        const {email, password, mobile} = input;
        if(email=== "" || !email.includes("@")) {
            alert("Enter a valid email id")
        } else if (password==="" || password.length<8) {
            alert("Please select a password of atleast 8 characters")
        } else if (mobile==="" || mobile.length!==10){
            alert("Enter a valid mobile number")
        }
        else {
            console.log("done")
            localStorage.setItem("userDetails",JSON.stringify([...data,input]));
            alert("Sign up successful")
            redirect("/login")
        }
    }
    
    return (
        <Box fontFamily='Open Sans' padding='10px 40px 20px 40px' backgroundColor='white' w='400px' margin='auto' mt='4' position='relative' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px'>
            <Text textAlign='center' color='#333333' fontSize='x-large' fontWeight='bold' mt='1rem' mb='1rem' fontFamily='Playfair Display' >Sign Up</Text>
            <Button 
                m='auto'
                mt='4'
                fontFamily='sans-serif'
                size='md'
                height='48px'
                width='80%'
                display='block'
                fontSize='1rem'
                color='#333333'
                fontWeight='normal'
                border='1px solid #bdbdbd'
                backgroundColor="white"
                leftIcon={<FcGoogle/>}
                  >
                  Continue with Google
            </Button>
            <Button 
                m='auto'
                mt='2'
                fontFamily='sans-serif'
                size='md'
                height='48px'
                width='80%'
                display='block'
                fontSize='1rem'
                color='#333333'
                fontWeight='normal'
                border='1px solid #bdbdbd'
                backgroundColor="white"
                leftIcon={<BsApple/>}
                  >
                  Continue with Apple
            </Button>
            <Divider mt='4'/>
            <Box w='10%' margin='auto' mt='-14px' zIndex='3' backgroundColor='white' color='#9397a0' fontSize='1.1667em'>OR</Box>
            <Input mt='4' borderColor='#bdbdbd' focusBorderColor='black' placeholder='Enter your email address' name='email' onChange={getData}/>
            <InputGroup size='md'>
                <Input
                   borderColor='#bdbdbd'
                    focusBorderColor='black'
                    pr='4.5rem'
                    mt='4'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    onChange={getData}
                    name="password"
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' mt='8' onClick={handleClick}>
                    {show ?  <ViewOffIcon /> : <ViewIcon/> }
                    
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Text color='gray' fontSize='14px' fontFamily='Inter' fontWeight='600' ml='4' mt='8' letterSpacing="0.025em" >enter your 10 digit mobile number *</Text>
            <Input borderColor='#bdbdbd' focusBorderColor='black' mt='1' onChange={getData} name="mobile"/>
            <Stack mt='4' spacing={4} direction='column'>
                <Checkbox color='#828282' colorScheme='blue' fontSize='16px' fontWeight='500' fontFamily='Inter' defaultChecked>
                I'd like to receive updates and offers from THG via email and messages
                </Checkbox>
                <Checkbox color='#828282' colorScheme='blue' fontSize='16px' fontWeight='500' fontFamily='Inter' defaultChecked>
                Contact me via Whatsapp
                </Checkbox>
            </Stack>
            <Button
            onClick={addData}
                fontFamily='sans-serif'
                size='md'
                height='48px'
                width='100%'
                backgroundColor='blue.900'
                color='white'
                fontSize='18px'
                mt='8'
                _hover={{ bg: "gray.300", color: "blue.900", border: "1px solid blue"  }}
                >
                Sign up
            </Button>
            <Text textAlign='center' mt='4' fontSize='13px' color='#3E4148'>
            By signing up, you agree to The Hindu’s Terms of Use and Privacy Policy
            </Text>
            <Text fontFamily='sans-serif' textAlign='center' mt='4'>Already have an account?</Text>
            <Text fontFamily='sans-serif' textAlign='center' mt='4'><Link to='/login'>Log In <ChevronRightIcon/></Link></Text>
        </Box>
    )
}

export default Signup;
