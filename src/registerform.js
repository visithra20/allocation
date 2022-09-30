import React, { useState } from 'react'
import {
    Button,
    Label,
    Input,
    Box,
    Flex,
    Field,
    NavLink,
    Paragraph,
} from 'theme-ui'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/Fc'
import Logo from '../assests/logo.svg'
const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [institution, setInstitution] = useState('')
    return (
        <>
            <Box
                sx={{
                    m: '5% 27.5%',
                    bg: 'white',
                    p: '5% 10%',
                    variant: 'theme.text.block',
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <Image src={Logo} />
                </Box>
                <Box>
                    <Paragraph variant="theme.text.heading">Register</Paragraph>
                </Box>
                <Box variant='theme.forms'>
                    <Flex
                        sx={{
                            flexDirection: ['column', 'row', 'row'],
                            marginTop: '2%',
                          
                            justifyContent: 'space-between',
                        }}
                    >
                        <Field
                        
                            label="First name"
                            name="first name"
                            value={firstName}
                            placeholder="First name"
                            
                            onChange={(e) => {
                                console.log(e.target.value)
                                setFirstName(e.target.value)
                            }}

                           
                        />
                        <Field
                            label="Last name"
                            name="last name"
                            value={lastName}
                            placeholder="Last name"
                            onChange={(e) => {
                                console.log(e.target.value)
                                setLastName(e.target.value)
                            }}
                        />
                    </Flex>
                    <Label htmlFor="email" sx={{ marginTop: '2%' }}>Email
</Label>
                    <Input
                        name="email"
                        id="email"
                        marginBottom={3}
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setEmail(e.target.value)
                        }}
                    />
                    <Label htmlFor="institution name">Institution Name</Label>
                    <Input
                        name="institution name"
                        id="institution name"
                        marginBottom={3}
                        value={institution}
                        placeholder="Institution name"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setInstitution(e.target.value)
                        }}
                    />
                </Box>
                <Button variant="theme.buttons.primary">Submit</Button>
                <Button variant="theme.buttons.secondary">
                    <FcGoogle />Sign in with gmail</Button>
                <Box>
                    <Paragraph
                        variant="theme.text.block"
                        sx={{ marginBottom: '2%' }}>
                        Already have an account
                        <NavLink href="#!" variant="theme.links.nav">Login</NavLink>
                    </Paragraph>
                </Box>
            </Box>
        </>
    )
}
export default Register
