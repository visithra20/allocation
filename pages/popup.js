import React, { useState } from 'react'
import {Box,Label,Radio,Field,Flex} from 'theme-ui'
const popup = () => {
    const[ employee,setEmployee]=useState()
    const[ project,setProject]=useState()
  return (
    <Box sx={{m:"10%",}}>
    <Box sx={{bg:'white',p:'10%'}}>
    <Label>
  <Radio
   
    value='true'
    defaultChecked={true}
    checked={employee}
    onChange={(e)=>{setEmployee(e.target.checked)}}
  />
  Employee
</Label>
<Label>
  <Radio
    value='false'
    checked={project}
    onChange={(e)=>{setProject(e.target.checked)}}
  />
 Project
</Label>
<Flex sx={{gap:'5%'}}><Field label="projectID" name="projectid"  />
<Field label="project name" type='text'name="projectid"  />
<Field label="Client name" type='text' name="projectid" defaultValue="" />
</Flex>
<Flex sx={{gap:'5%',width:'100%'}}><Field label="lead name" type='text' name="projectid" />
<Field label="start date" type='date' name="projectid" />
<Field label="end date" type='date' name="projectid" />
</Flex>
    </Box></Box>
  )
}
export default popup
