import { Box, Grid ,Container ,Button } from '@mui/material'
import React ,{useRef} from 'react'
import Marquee from "react-fast-marquee";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import design3 from "../images/design3.jpg";
import EastIcon from '@mui/icons-material/East';
import d1 from "../images/d1.jpg";
import d2 from "../images/d2.jpg";
import d3 from "../images/d3.jpg";
import d8 from "../images/d8.jpg";
import d6 from "../images/d6.jpg";
import d10 from "../images/d10.jpg";
import d11 from "../images/d11.jpg";

import d9 from "../images/d9.jpg";
import Fade from 'react-reveal/Fade';

import { useNavigate } from 'react-router-dom';
import { useState } from "react";


function Paintings() {

    const marqueeRef = useRef(null);

    const handleHover = () => {
        marqueeRef.current.stop();
      };
    
      const navigate = useNavigate();

      function handleClickd1() {
        navigate('/d1' , { state: {d : d9}});
       
      }
      function handleClickd2() {
        navigate('/d2' ,{ state: {d : d2}});
      }
      function handleClickd3() {
        navigate('/d3' ,{ state: {d : d3}});
      }
      function handleClickd4() {
        navigate('/d4' ,{ state: {d : d10}});
      }
      function handleClickd5() {
        navigate('/d5',{ state: {d : d11}});
      }
      function handleClickd6() {
        navigate('/d6',{ state: {d : d8}});
      }
      function handleClickd7() {
        navigate('/d7',{ state: {d : d6}});
      }


  return (
    <div>
        <Box>
        <Container sx={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center'}}>
                <Grid lg={6}>
              <Fade delay={20} left >    <Typography variant='h4' fontFamily='Arapey'>FEATURED PAINTINGS</Typography> </Fade>
                </Grid>
                <Grid lg={4}>
              <Fade right >   <Typography variant='h3'><EastIcon fontSize='large'/></Typography> </Fade>
                </Grid>
            </Container>
            <Grid container spacing={1} sx={{display:'flex' ,justifyContent:'space-evenly'}}>
                <Marquee ref={marqueeRef} onMouseEnter={handleHover} onMouseLeave={handleHover}  speed={40} gradient>
                <Grid marginTop={2} padding={2}>
                    <Button onClick={handleClickd1}>
                <Card  sx={{ minWidth: 295 ,boxShadow:"none" ,boxborder:'2px solid' }}>
      <CardActionArea >
      <CardMedia>
          <img
         className='border'
          src={d9}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
            Painting
          </Typography>
         
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Button onClick={handleClickd2}>
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
           className='border'
          src={d2}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Button onClick={handleClickd3}>
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d3}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Button onClick={handleClickd4}>
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d10}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Button onClick={handleClickd5}>
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d11}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Button onClick={handleClickd6}>
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d8}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Button onClick={handleClickd7}>
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
        <CardMedia>
          <img
          className='border'
          src={d6}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
    
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
                </Grid>
               
                </Marquee>
            </Grid><br/><br/>
            {/* <Grid container spacing={1} sx={{display:'flex' ,justifyContent:'space-evenly'}}>
                <Marquee speed={40} gradient>
                <Grid marginTop={2} padding={2}>
                <Card  sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d9}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
            Painting
          </Typography>
         
        
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Card sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d9}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Card sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d9}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Card sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d9}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Card sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d2}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Card sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={d3}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                <Grid marginTop={2} padding={2}>
                <Card sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
        <CardMedia>
          <img
          className='border'
          src={design3}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '240px', // set the height of the image as needed
          }}
          />
          </CardMedia>
    
        <CardContent>
          <Typography gutterBottom variant="body-1" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
               
                </Marquee>
            </Grid> */}
        </Box>
    </div>
  )
}

export default Paintings