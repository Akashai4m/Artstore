import logo from './logo.svg';
import { Box, Container, Grid, Typography ,Button } from '@mui/material'
import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import Artists from './Components/Artists';
import Paintings from './Components/Paintings';
import Detail from './Components/Detail';
import Home from "./Components/Home";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import d9 from "./images/d9.jpg";
import design1 from "./images/d1.jpg";
import back from "./images/back.jpg";
import design3 from "./images/design3.jpg";
import design4 from "./images/design4.jpg";
import design5 from "./images/design5.jpg";
import d1 from "./images/d1.jpg";
import d2 from "./images/d2.jpg";
import d3 from "./images/d3.jpg";
import d4 from "./images/d4.jpg";
import d5 from "./images/d5.jpg";
import d6 from "./images/d6.jpg";
import d7 from "./images/d7.jpg";
import d8 from "./images/d8.jpg";
// import d9 from "./images/d9.jpg";
import d10 from "./images/d10.jpg";
import d11 from "./images/d11.jpg";
import FineArts from './Components/FineArts';
import Anime from './Components/Anime';
import Crafts from './Components/Crafts';
import Commisions from './Components/Commisions';
import { render } from '@testing-library/react';
import NewArrivals from './Components/NewArrivals';
import CuratedCollection from './Components/CuratedCollection';
import BestSellers from './Components/BestSellers';
import GallaryWall from './Components/GallaryWall';
import FallingFlowersAnimation from './Components/FallingStarsAnimation';


function Carditem(props){
  return(
    <div>
      <FallingFlowersAnimation />
 <Grid m={3} p={2} sx={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center' , border:'2px solid' ,borderRadius:'16px'}}>

<img src={props.value} alt='..' width={50} height={50}></img>
  <Grid sx={{display:'block'}}>
    <Typography variant='h7' >Name of p1</Typography><br/>
    <Typography variant='body-2' marginTop={1}>$620</Typography>

  </Grid>
  <Grid>
    <Button variant='contained' color='error'>Remove</Button>
    </Grid>
</Grid> 
    </div>
  )
}





function App() {

  const[count ,setCount]= useState(0);
  const[show ,setShow]= useState(false);
  const[pone,setPone]=useState(false);
  // const[d2,setD2]=useState(false);
  // const[d3,setD3]=useState(false);
  // const[d4,setD4]=useState(false);
  // const[d5,setD5]=useState(false);
  // const[d6,setD6]=useState(false);


  const updateCount = (newCount ,hide) => {
    setCount(newCount);
    setShow(hide);
  };

  function updateCartd1(value)  {
    console.log(value)
      return<Carditem  value={value}   />;  
  };

  


  return (
    <div className="App"  style={{backgroundColor:'#FFF5EE'}}>
    
     <Router>
      <Routes>
     <Route path="/" element={<Home count={count} show={show} d1={pone} updateCartd1={updateCartd1} updateCount={updateCount}  />}/>
     <Route path="/d1" element={<Detail d1={pone} show={show} updateCartd1={updateCartd1} updateCount={updateCount} count={count} photo={d9} />}/>
     <Route path="/d2" element={<Detail show={show} updateCartd1={updateCartd1} updateCount={updateCount} count={count} photo={d2} />}/>
     <Route path="/d3" element={<Detail show={show} updateCartd1={updateCartd1} updateCount={updateCount} count={count} photo={d3} />}/>
     <Route path="/d4" element={<Detail show={show} updateCartd1={updateCartd1} updateCount={updateCount} count={count} photo={d10} />}/>
     <Route path="/d5" element={<Detail show={show} updateCartd1={updateCartd1} updateCount={updateCount} count={count} photo={d11} />}/>
     <Route path="/d6" element={<Detail show={show} updateCartd1={updateCartd1} updateCount={updateCount} count={count} photo={d8} />}/>
     <Route path="/d7" element={<Detail show={show} updateCartd1={updateCartd1} updateCount={updateCount} count={count} photo={d6} />}/>
     <Route path='/finearts' element={<FineArts updateCartd1={updateCartd1} count={count} show={show} d1={pone} updateCount={updateCount}  />} />
     <Route path='/anime' element={<Anime updateCartd1={updateCartd1} count={count} show={show} d1={pone} updateCount={updateCount}  />} />
     <Route path='/crafts' element={<Crafts updateCartd1={updateCartd1} count={count} show={show} d1={pone} updateCount={updateCount}  />} />
     <Route path='/commisions' element={<Commisions updateCartd1={updateCartd1}  count={count} show={show} d1={pone} updateCount={updateCount}  />} />
     <Route path='/Newarrivals' element={<NewArrivals updateCartd1={updateCartd1} count={count} show={show} d1={pone} updateCount={updateCount}  />} />
     <Route path='/Curated' element={<CuratedCollection updateCartd1={updateCartd1} count={count} show={show} d1={pone} updateCount={updateCount}  />} />
     <Route path='/bestsellers' element={<BestSellers updateCartd1={updateCartd1} count={count} show={show} d1={pone} updateCount={updateCount}  />} />
     <Route path='/gallarywall' element={<GallaryWall updateCartd1={updateCartd1} count={count} show={show} d1={pone} updateCount={updateCount}  />} />

       
     </Routes>
      </Router>
    </div>
  );
}

export default App;
