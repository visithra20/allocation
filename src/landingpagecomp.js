import React from 'react'
import { Box,Button, Paragraph } from 'theme-ui'
import image from '../assests/getstarted.svg'
import Image from 'next/image'
const Landingpagecomp = () => {
    return (
           <Box sx={{textAlign:"center",margin:'10% 10%'}}>
        <Image src={image}/>
                <Paragraph variant="theme.text.block" sx={{ fontWeight: 600, fontSize: '24px'}}> No data available</Paragraph>
                <Paragraph variant="theme.text.block" sx={{mt:'2%'}} > There are no employee get started by adding employee </Paragraph>
                <Button variant="theme.buttons.primary" sx={{width:['40%','20%','10%']}}>Get Started</Button>
               </Box>
    )
}
export default Landingpagecomp