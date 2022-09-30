import React from 'react'
import { Box,Button, Paragraph } from 'theme-ui'
import image from '../assests/getstarted.svg'
import Image from 'next/image'
const Landingpagecomp = () => {
    return (
           <Box variant="theme.text.block"  sx={{margin:'10% 10%'}}>
        <Image src={image}/>
                <Paragraph sx={{ fontWeight: 600, fontSize: '24px'}}> No data available</Paragraph>
                <Paragraph sx={{mt:'2%'}} > There are no employee get started by adding employee </Paragraph>
                <Button variant='theme.buttons.primary' sx={{width:['40%','20%','10%']}}>Get Started</Button>
               </Box>
    )
}
export default Landingpagecomp