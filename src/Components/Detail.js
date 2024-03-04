import React ,{useState} from 'react'
import Navbar from './Navbar'
import design3 from "../images/design3.jpg";
import { Box, Button, Grid } from '@mui/material'
import Marquee from "react-fast-marquee";
import Card from '@mui/material/Card';
// import Fade from 'react-reveal/Fade';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import d9 from "../images/d9.jpg";
import Footer from './Footer';
import { useLocation } from "react-router-dom";
import Offer from './Offer';

function Detail(props) {

  const location = useLocation();

  const [cartItems, setCartItems] = useState([]);

    let d = location.state.d;
    console.log(d)

    function Cart() {
      props.updateCount(props.count+1 ,true);
      console.log(d)
      //  props.updateCartd1(d);
       localStorage.setItem('img' ,d)
        // console.log(props.count)
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
           storedItems.push(d);
           localStorage.setItem('items', JSON.stringify(storedItems));
           console.log(localStorage.getItem('items'))
         
      }
      


  return (
    <div>
      <Offer/>
          <Navbar d={d} cartItems={cartItems} count={props.count} show={props.show} d1={props.d1} updateCount={props.updateCount} updateCartd1={props.updateCartd1} />
          
          <Box>
            <Grid container spacing={2} sx={{display:'flex',justifyContent:'space-evenly' ,alignItems:'center'}}>
                <Grid lg={4} padding={6} sx={{backgroundColor:'#F4F4F2'}}>
                    <Rotate top left >
                <Card sx={{ minWidth: 245 ,boxShadow:"none" }}>
      <CardActionArea>
        <CardMedia>
          <img
          className='border'
          src={props.photo}
          alt={"design..."}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '340px', // set the height of the image as needed
          }}
          />
          </CardMedia>
    
        <CardContent sx={{backgroundColor:'#F4F4F2'}}>
          <Typography gutterBottom variant="body-2" fontFamily='Arapey' component="div">
          Painting
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </Rotate>
                </Grid>
                <Grid lg={5} sx={{textAlign:'start'}}>
                  <Fade right delay={20}> <Typography fontFamily='Arapey' variant='h4'>Wallowing Breeze</Typography></Fade> 
                    <Typography fontFamily='Arapey' variant='body-2'>Hetty Richards</Typography><br/><br/>
                    <Typography fontFamily='Arapey' variant='text'>oil on canvas ,2008</Typography><br/>
                    <Typography fontFamily='Arapey' variant='text'>Gallery Wrap Canvas</Typography><br/>
                    <Typography fontFamily='Arapey' variant='text'>26in x 23in</Typography>
                    <br/><br/>
                    <Typography fontFamily='Arapey' variant='text'>Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.</Typography>
                    <hr/>
                    <br/>
                    <Typography fontFamily='Arapey' variant='h5'>$620</Typography><br/>
                    <Typography fontFamily='Arapey' variant='h8'>Ships from new york ,USA</Typography><br/>
                    <Typography fontFamily='Arapey' variant='h9'>Estimate ships in around 3-4 days ,USA</Typography><br/>
                    <br/>
                    <Grid>
                    <Fade right >   <Button onClick={Cart} sx={{backgroundColor:'#000',color:'#fff'}} variant='contained' >Add To Cart</Button> </Fade>
                    </Grid>

                </Grid>
            </Grid>
          </Box>
          <br/><br/>
          <Footer/>
    </div>
  )
}

export default Detail