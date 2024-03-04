import React,{useState ,useEffect} from 'react'
import Navbar from './Navbar';
import Artists from './Artists';
import Paintings from './Paintings';
import Fade from 'react-reveal/Fade';
import Detail from './Detail';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import { Box, Container, Grid, Typography ,Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import bs1 from "../images/bs1.webp";
import bs2 from "../images/bs2.webp";
import bs3 from "../images/bs3.webp";
import bs4 from "../images/bs4.webp";
import ts1 from "../images/Testimonial_1.webp";
import ts2 from "../images/Testimonial_4.webp";
import ts3 from "../images/Testimonial_6.webp";
import ts4 from "../images/Testimonial_7.webp";
import ts5 from "../images/Testimonial_2.1.webp";
import ts6 from "../images/Testimonial_5.webp";
import ts7 from "../images/Testimonial_3.webp";
import d9 from "../images/d9.jpg";
import Marquee from 'react-fast-marquee';
import Carousel from 'react-material-ui-carousel';
import Offer from './Offer';
import c1 from "../images/c1.webp";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.webp";
import c4 from "../images/c4.webp";
import FallingFlowersAnimation from './FallingStarsAnimation';

const useStyles = makeStyles({
  carousel: {
    height: '350px',
    margin: 'auto',
   
  },
  paper: {
    paddingTop: '0px',
    textAlign: 'center',
    color: '#333',
    background: '#FFF5EE',
    height: '100%',
  },
  button: {
    marginTop: '1px',
  },
});


function Home(props) {

  
  const navigate = useNavigate();
  const classes = useStyles();

  function handleClicknewarrival() {
    navigate('/Newarrivals');
  }

  function handleClickbestseller() {
    navigate('/bestsellers');
  }

  function handleClickcurated() {
    navigate('/Curated');
  }

  function handleClickgallarywall() {
    navigate('/gallarywall');
  }

  function handleClickfinearts() {
    navigate('/finearts');
    
  }
  function handleClickanime() {
    navigate('/anime');
  }
  function handleClickcrafts() {
    navigate('/crafts');
  }
  function handleClickcommisions() {
    navigate('/commisions');
  }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  const items = [
    {
      title: c1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      function :handleClickbestseller
    },
    {
      title: c2,
      description: 'Pellentesque euismod ipsum sit amet neque auctor, at semper ipsum volutpat.',
      function :handleClickcurated
    },
    {
      title: c3,
      description: 'Vestibulum in sapien vel magna euismod vestibulum ac ut magna.',
      function :handleClickgallarywall
    },
    {
      title: c4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      function :handleClicknewarrival
    },
  ];

  return (
    <div>
      {/* <FallingFlowersAnimation/> */}
         <Offer/>
        <Navbar count={props.count} show={props.show} d1={props.d1} updateCount={props.updateCount} updateCartd1={props.updateCartd1} d={props.d} />
       <Carousel >
      {items.map((item, i) => (
         <Box key={i} className={classes.paper}>
           <Button onClick={item.function}>
          {/* <h2>{item.title}</h2> */}
          <img width='100%' height='100%' src={item.title} alt="......"></img>
         
          </Button>
        </Box>
      ))}
    </Carousel>
        <Container sx={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center'}}>
                <Grid lg={6}>
              <Fade delay={20} left >    <Typography variant='h4' fontFamily='Arapey'>BESTSELLERS</Typography> </Fade>
                </Grid>
                <Grid lg={4}>
              <Fade right >   <Typography variant='h3'><EastIcon fontSize='large'/></Typography> </Fade>
                </Grid>
            </Container>
            <Grid container spacing={1} sx={{display:'flex' ,justifyContent:'space-evenly'}}>
                {/* <Marquee ref={marqueeRef} onMouseEnter={handleHover} onMouseLeave={handleHover}  speed={40} gradient> */}
                <Grid marginTop={2} padding={2}>
                    <Button >
                <Card  sx={{ minWidth: 295 ,boxShadow:"none" ,boxborder:'2px solid' }}>
      <CardActionArea >
      <CardMedia>
          <img
         className='border'
          src={bs1}
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
                <Button >
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
           className='border'
          src={bs2}
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
                <Button >
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={bs3}
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
                <Button >
                <Card sx={{ minWidth: 295 ,boxShadow:"none" }}>
      <CardActionArea>
      <CardMedia>
          <img
          className='border'
          src={bs4}
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
               
               
                {/* </Marquee> */}
            </Grid><br/><br/>
      <Paintings/>
      <Container>
      <Grid lg={6} marginBottom={5} sx={{display:'flex' ,justifyContent:'start'}}>
              <Fade delay={20} left >    <Typography variant='h4' fontFamily='Arapey'>ALL ART TYPES</Typography> </Fade>
                </Grid>
                </Container>
      <Grid container marginBottom={2} spacing={2} sx={{display:'flex' ,justifyContent:'space-evenly',alignItems:'center'}}>
       
      <Grid m={1}><Card className='finearts' sx={{width:270 ,height:270 ,justifySelf:'end'}}><CardActionArea sx={{backgroundColor:'transparent black',marginTop:'85%'}}><Button onClick={handleClickfinearts} style={{borderColor:'white',color:'white'}} variant='outlined'>Finearts</Button></CardActionArea></Card></Grid> 
      <Grid  m={1}><Card className='anime' sx={{width:270 ,height:270}}><CardActionArea sx={{backgroundColor:'transparent black',marginTop:'85%'}}><Button onClick={handleClickanime} style={{borderColor:'white',color:'white'}} variant='outlined'>Anime</Button></CardActionArea></Card></Grid> 
      <Grid  m={1}><Card className='finearts' sx={{width:270 ,height:270}}><CardActionArea sx={{backgroundColor:'transparent black',marginTop:'85%'}}><Button onClick={handleClickcrafts} style={{borderColor:'white',color:'white'}} variant='outlined'>Crafts</Button></CardActionArea></Card></Grid> 
      <Grid  m={1}><Card className='anime' sx={{width:270 ,height:270}}><CardActionArea sx={{backgroundColor:'transparent black',marginTop:'85%'}}><Button onClick={handleClickcommisions} style={{borderColor:'white',color:'white'}} variant='outlined'>Commisions</Button></CardActionArea></Card></Grid> 
     
       
      </Grid>
     
      {/* <Detail/> */}
      <br/>
      <Container>
      <Grid lg={6} marginBottom={5} sx={{display:'flex' ,justifyContent:'start'}}>
              <Fade delay={20} left >    <Typography variant='h4' fontFamily='Arapey'>TESTIMONIALS</Typography> </Fade>
                </Grid>
                </Container>
      <Grid container spacing={2} sx={{display:'flex' ,justifyContent:'space-around',alignItems:'center'}}>
        <Marquee speed={50}>
      <Grid m={1}> <img src={ts1} width={300} alt='..'></img></Grid> 
      <Grid  m={1}><img src={ts2} width={300} alt='..'></img></Grid> 
      <Grid  m={1}><img src={ts3} width={300} alt='..'></img></Grid> 
      <Grid  m={1}><img src={ts4} width={300} alt='..'></img></Grid> 
      <Grid  m={1}><img src={ts5} width={300} alt='..'></img></Grid> 
      <Grid  m={1}><img src={ts6} width={300} alt='..'></img></Grid> 
      <Grid  m={1}><img src={ts7} width={300} alt='..'></img></Grid> 
        </Marquee>
      </Grid>
     
      <Artists/>
        <Footer/>
    </div>
  )
}

export default Home