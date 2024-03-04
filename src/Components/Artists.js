import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import people01 from "../images/people01.png";
import people02 from "../images/people02.png";
import people03 from "../images/people03.png";
import Fade from 'react-reveal/Fade';

function Artists() {
  return (
    <div style={{backgroundColor:'#FFF5EE'}}>
        <Box>
            <Container >
                <br/><br/>
               <Fade left> <Grid sx={{textAlign:'start'}}><Typography fontFamily='Arapey' variant='h4'>FEATURED ARTISTS</Typography></Grid></Fade>
                  <Grid marginTop={2} marginBottom={2} container spacing={1} sx={{display:'flex' ,justifyContent:'space-evenly'}}>
                    
                    <Grid lg={3} marginTop={2} sx={{display:'flex' ,justifyContent:'space-around' ,alignItems:'center'}}>
                       <Grid ><Avatar sx={{ bgcolor: '#e9e9e9' }}><img src={people01} alt='..'/></Avatar></Grid>
                       <Grid>
                        <Typography fontFamily='Arapey' variant='h8'>Mike Lambert</Typography><br/>
                        <Typography fontFamily='Arapey' variant='body-2'>Painter ,Texas</Typography>

                       </Grid>
                    </Grid>
                    <Grid lg={3} marginTop={2} sx={{display:'flex' ,justifyContent:'space-around' ,alignItems:'center'}}>
                    <Grid ><Avatar sizes='large' sx={{ bgcolor: '#e9e9e9' }}><img src={people02} alt='..'/></Avatar></Grid>
                       <Grid>
                        <Typography fontFamily='Arapey' variant='h8'>Mike Lambert</Typography><br/>
                        <Typography fontFamily='Arapey' variant='body-2'>Painter ,Texas</Typography>

                       </Grid>
                    </Grid>
                    <Grid lg={3} marginTop={2} sx={{display:'flex' ,justifyContent:'space-around' ,alignItems:'center'}}>
                    <Grid ><Avatar sx={{ bgcolor: '#e9e9e9' }}><img src={people03} alt='..'/></Avatar></Grid>
                       <Grid>
                        <Typography fontFamily='Arapey' variant='h8'>Mike Lambert</Typography><br/>
                        <Typography fontFamily='Arapey' variant='body-2'>Painter ,Texas</Typography>

                       </Grid>
                    </Grid>
                  </Grid>
                  <br/><br/>
            </Container>
        </Box>
    </div>
  )
}

export default Artists