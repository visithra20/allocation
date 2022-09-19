import React, { useState } from 'react'
import {
    Box,
    Label,
    Input,
    Checkbox,
    Button,
    NavLink,
    Heading,
    Flex,
    Paragraph,
} from 'theme-ui'
import Image from 'next/image'
import logo from '../assests/logo.svg'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
// import {AiOutlineEye} from 'react-icons/ai'
export const Login = () => {
    const[username,setUsername]=useState()
    const[password,setPassword]=useState()
    // const togglePassword = () => {
    //     setPassword(!password);
    //   };
    const Router = useRouter()
    const Landingroute = () => {
        Router.push('/landingpage')
    }
    return (
        <Box as="form" variant="theme.forms" sx={{ m: '5%  28.5%', bg: 'white' ,p: '4% 6.5%'}}>
                <Box sx={{ textAlign: 'center', pb: '2%' }}>
                    <Image src={logo} />
                </Box>
                <Heading variant="theme.text.heading"> Login </Heading>
                <Label htmlFor="username">User name</Label>
                <Input
                    name="username"
                    id="username"
                    value={username}
                    placeholder="Enter E-mail"
                    onChange={(e) => {
                        console.log(e.target.value)
                        setUsername(e.target.value)
                    }}
                />
                <Label htmlFor="password">Password</Label>
                <Flex>
                    <Input
                        type={password ? "password" : "text"}
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setPassword(e.target.value)}}
                    />
                    
                    {/* <span>  <AiOutlineEye onClick={togglePassword}/></span> */}
                </Flex>
                <NavLink variant="theme.links.nav">Forgot password?</NavLink>
                    <Label>
                        <Checkbox />
                        Remember me
                    </Label>
                    <Button variant="theme.buttons.primary" onClick={Landingroute}>Login</Button>
                    <Button variant="theme.buttons.secondary">
                    <FcGoogle style={{marginRight:"4%"}}/>
                        Signup with google
                    </Button>
                        <Paragraph variant="theme.text.block">
                            Don’t have an account?
                            <NavLink variant="theme.links.nav">
                                Register
                            </NavLink>{' '}
                        </Paragraph></Box>
    )
}