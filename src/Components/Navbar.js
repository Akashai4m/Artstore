/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Typography ,Button, Link } from '@mui/material'
import React,{useState ,useEffect ,memo} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EastIcon from '@mui/icons-material/East';
import logopo from "../images/logopo.png";
import Marquee from "react-fast-marquee";
import Zoom from 'react-reveal/Zoom';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import d1 from "../images/d1.jpg";
import d2 from "../images/d2.jpg";
import d3 from "../images/d3.jpg";
import d8 from "../images/d8.jpg";
import d6 from "../images/d6.jpg";
import d10 from "../images/d10.jpg";
import d11 from "../images/d11.jpg";
import { useNavigate } from 'react-router-dom';
import d9 from "../images/d9.jpg";

const useStyles = makeStyles(() => ({
  drawer: {
    width: '30%',
    background:'#FFF5EE'
  },
}));




function Navbar(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [first , setFirst] = useState(true);

  // const [cartItems, setCartItems] = useState([]);
  const cartItems = JSON.parse(localStorage.getItem('items'));
  console.log(cartItems)

  const img = props.d;

  useEffect(() => {
      Carditem(img);
  }, [cartItems]);


  function handleClickhome() {
    navigate('/');
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
  function handleClickhome() {
    navigate('/');
  }

   

  //  useEffect(() => {
  //   const newItem = props.updateCartd1(props.d);
  //   setCartItems([...cartItems, newItem] ,newItem);
  //         console.log(cartItems)
   
  //  }, [ props.d]);

  const remove = ()=>{
      // setFirst(false)
      props.updateCartd1(false)
      props.updateCount(props.count -1)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  function Carditem(value){

    const handleRemove = () => {
      // Remove the image from the cartItems array
      const updatedCartItems = cartItems.filter(item => item !== value);
      // Update the cartItems in localStorage
      localStorage.setItem('items', JSON.stringify(updatedCartItems));
      // Call the props.updateCount function to update the count of items in the cart
      props.updateCount(props.count - 1);
      // Call the parent component's updateCartd1 function to update the cart items
      props.updateCartd1(updatedCartItems);
    };
    
    return(
      <div>
   <Grid m={3} p={2} sx={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center' , border:'2px solid' ,borderRadius:'16px'}}>
  
  <img src={value} alt='..' width={50} height={50}></img>
    <Grid sx={{display:'block'}}>
      <Typography variant='h7'fontFamily='Arapey' >Name of p4</Typography><br/>
      <Typography variant='body-2' fontFamily='Arapey' marginTop={1}>$620</Typography>
  
    </Grid>
    <Grid>
      <Button variant='contained' onClick={handleRemove} color='error'>Remove</Button>
      </Grid>
  </Grid> 
      </div>
    )
  }


  return (
    <div>
        <Box>
            <Grid paddingTop={3} container spacing={1} sx={{display:'flex',justifyContent:'space-between' ,alignItems:'center'}}>
                <Grid lg={4}>
              <Zoom> <Button onClick={handleClickhome}  > <Typography variant='h3'><img src={logopo} width={150} height={150} alt='..'></img></Typography></Button> </Zoom>
                </Grid>
                <Grid lg={8} sx={{display:"flex" ,justifyContent:'space-evenly' ,alignItems:'center'}}>
                 <Grid><Button onClick={handleClickfinearts} style={{color:'#000'}}><Typography fontFamily='Arapey' variant='h6'>FINEARTS</Typography></Button></Grid>
                 <Grid><Button onClick={handleClickanime} style={{color:'#000'}}><Typography fontFamily='Arapey' variant='h6'>ANIME</Typography></Button></Grid>
                  <Grid><Button onClick={handleClickcrafts} style={{color:'#000'}}><Typography fontFamily='Arapey' variant='h6'>CRAFTS</Typography></Button></Grid>
                   <Grid><Button onClick={handleClickcommisions} style={{color:'#000'}}><Typography fontFamily='Arapey' variant='h6'>COMMISIONS</Typography></Button></Grid>
                    <Grid><Button onClick={toggleDrawer(true)} style={{color:'#000'}}><Typography fontFamily='Arapey' variant='h6'><Badge badgeContent={props.count} color="error"><ShoppingCartIcon fontSize='large'/></Badge></Typography></Button></Grid>
                     
                </Grid>
            </Grid>
            <br/><br/>

            <Drawer
           
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div
          
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Add your drawer content here */}
           <Typography marginTop={2} marginBottom={2} textAlign='center' fontFamily='Arapey' variant='h6'>Your Cart</Typography>
         { (props.count === 0 ) && 
         <Box>
            <Grid container textAlign='center' padding={2} spacing={2} sx={{display:'block', justifyContent:'center' ,alignItems:'center' ,marginTop:'50%'}}>
              <Typography marginTop={1} marginBottom={4} textAlign='center'fontFamily='Arapey' variant='h8'>Your cart is empty</Typography><br/><br/>
              <Button  color='secondary' onClick={handleClickhome} fontFamily='Arapey' variant='contained'>Continue Browsing Site</Button>
            </Grid>
           </Box> }
             <br/>
             <Box>
              <Grid container spacing={2} sx={{display:'block'}}  >
                {/* {console.log(props.d1)} */}
                    {/* { first && props.d1 && <Grid m={3} p={2} sx={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center' , border:'2px solid' ,borderRadius:'16px'}}>

                        <img src={d9} alt='..' width={50} height={50}></img>
                          <Grid sx={{display:'block'}}>
                            <Typography variant='h7' >Name of p1</Typography><br/>
                            <Typography variant='body-2' marginTop={1}>$620</Typography>

                          </Grid>
                          <Grid>
                            <Button variant='contained' onClick={remove} color='error'>Remove</Button>
                            </Grid>
                       </Grid> } */}
                       {/* {console.log(props.d)} */}
                       

                      {  (props.count !== 0 ) && cartItems.map((item, index) => (
        <Grid item xs={12} key={index}>
         {Carditem(item)}
        </Grid>
      ))}  
      {/* {Carditem(localStorage.getItem('img'))} */}
{/* {props.updateCartd1(props.d)} */}


       { (props.count !== 0 ) &&         <Grid p={2} m={3}>
                <Button style={{width:'100%'}} variant='contained' color='success'>Buy Now</Button>
              </Grid> }
              </Grid>
              
             </Box>


        </div>
      </Drawer>
            
        </Box>
    </div>
  )
}

export default Navbar