import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material'
import { Container ,Box  ,Grid, Typography} from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:'#F4F4F2'}}>
        <Box>
            <Container>
                <Container>
                <Grid container spacing={0} sx={{display:'block'}}>
                <Grid textAlign='center' sx={{display:'flex',justifyContent:'center' ,alignItems:'center'}}>
                    <Grid padding={1}><Instagram fontSize='large'/></Grid>
                    <Grid  padding={1}><FacebookOutlined fontSize='large'/></Grid>
                    <Grid  padding={1}><Twitter fontSize='large'/></Grid>

                   </Grid>

                   <Grid ml={2} mr={2} textAlign='center' sx={{display:'flex' ,justifyContent:'center' ,alignItems:'center'}}>
                    <Grid padding={2} ><Typography fontFamily='Arapey' variant='h6'>Home</Typography></Grid>
                    <Grid  padding={2}><Typography fontFamily='Arapey' variant='h6'>About</Typography></Grid>
                    <Grid  padding={2}><Typography fontFamily='Arapey' variant='h6'>Contact</Typography></Grid> 
                     <Grid  padding={2} ><Typography fontFamily='Arapey' variant='h6'>Products</Typography></Grid>
                   </Grid>
                  
                </Grid>
                </Container>
            </Container>
        </Box>
    </div>
  )
}

export default Footer