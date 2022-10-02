import { ChevronRightIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Input, Text, Button, InputGroup, InputRightElement, Divider } from '@chakra-ui/react';
import React from 'react';
import {FcGoogle} from "react-icons/fc";
import {BsApple} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const redirect = useNavigate();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);

    const [input, setInput] = React.useState({
        email: "",
        password: "",
    })

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
        const getUserArr = localStorage.getItem("userDetails");
        console.log(getUserArr)
        const {email, password} = input;
        if(email=== "" || !email.includes("@")) {
            alert("Invalid email id")
        } else if (password==="" || password.length<8) {
            alert("Invalid password")
        } else {
            if(getUserArr && getUserArr.length) {
                const userDetails = JSON.parse(getUserArr);
                const userLogin = userDetails.filter((el, i)=> {
                    return el.email===email && el.password===password
                });
                console.log(userLogin)
                if(userLogin.length===0) {
                    alert("Invalid Details")
                } else {
                    alert("Login successful")
                    redirect("/")
                }
                
            }
            // console.log("done")
            // localStorage.setItem("userDetails",JSON.stringify([...data,input]));
        }
    }

    return (
        <Box fontFamily='Open Sans' padding='12px 40px 20px 40px' backgroundColor='white' w='400px' margin='auto' mt='4' position='relative' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px'>
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
            <Input mt='4' borderColor='#bdbdbd' focusBorderColor='black' placeholder='Enter your email address and hit enter' onChange={getData} name='email'/>
            <InputGroup size='md'>
                <Input
                   borderColor='#bdbdbd'
                    focusBorderColor='black'
                    pr='4.5rem'
                    mt='4'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    name='password'
                    onChange={getData}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' mt='8' onClick={handleClick}>
                    {show ?  <ViewOffIcon/> : <ViewIcon/> }
                    
                    </Button>
                </InputRightElement>
            </InputGroup>
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
                _hover={{ bg: "gray.300", color: "blue.900", border: "1px solid blue" }}
                >
                Log In
            </Button>
            <Text fontFamily='sans-serif' textAlign='center' mt='4'>Don't have an account?</Text>
            <Text fontFamily='sans-serif' textAlign='center' mt='4'><Link to='/signup'>Sign In <ChevronRightIcon/></Link></Text>
        </Box>
    );
}

export default Login;
