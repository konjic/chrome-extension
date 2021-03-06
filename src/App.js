import './App.css';
import React, { useEffect, useState } from "react";
import Menu from './Components/Menu'
import {
  Routes ,
  Route, 
  Router,
  Link,
} from "react-router-dom";
import Home from './Components/Home'
import KFC from './Components/KFC'
import McDonalds from './Components/McDonalds'
import BurgerKing from './Components/BurgerKing'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const [users, setUsers] = useState();
  const [meniu, setMeniu] = useState()


  const getApiData = async () => {
    const response = await fetch(
      "https://vercelfastfoodapi.vercel.app/fastfood/"
    ).then((response) => response.json());

    setUsers(response);

    setMeniu(response.map(r => r.meniu))  // <----------- SAVES VALUES

   console.log(meniu)


  };

  useEffect(() => {
    getApiData();
  }, []);


  return (

    <div className="App">

<div className='big-container'> 

 {users &&
        users.map((user) => (
          <div className="item-container" key={user._id}>
             <h3> {user.restaurant}</h3> 
              {user.meniu.map(m => 

              <div className='flex-container'>
              {/* <p key={m.nume}> {m.nume} </p>  */}

              <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="100"
        image={m.imagine}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {m.nume}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {m.pret} RON
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='button-glovo' href={m.linkGlovo} target="_blank">Spre Glovo</Button>
        <Button size="small" className='buton-tazz' href={m.linkTazz} target="_blank">Spre taz</Button>

      </CardActions>
    </Card> 



</div>
              )} <br/>  

          

              


            
          </div>
        ))
         }  

         
</div>


      {/* {meniu[0].map(item=>(
        <div> {item.nume}{item.pret}</div>
      ))}  */}

        



{/* 
<Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/mcdonalds' element={<McDonalds/>} />
            <Route path='/kfc' element={<KFC/>} />
            <Route path='/burgerking' element={<BurgerKing/>} />
          </Routes> */}


{/* 
<h3>McD</h3>
<div className='big-container '>
{meniu[0].map(item=>(
  <div className='flex-container'>

<Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.ebayimg.com/images/g/kSAAAOSwX1lilL45/s-l1600.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.nume}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.pret} RON
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='button-glovo'>Spre Glovo</Button>
        <Button size="small" className='buton-tazz' >Spre taz</Button>
        <Button size="small" className='button-foodpanda'>Spre foodpanda</Button>
      </CardActions>
    </Card> 


</div>
         
       ))}





<h3>KFC</h3>
{meniu[1].map(item=>(
  <div className='flex-container'>

<Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.ebayimg.com/images/g/kSAAAOSwX1lilL45/s-l1600.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.nume}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.pret} RON
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='button-glovo'>Spre Glovo</Button>
        <Button size="small" className='buton-tazz' >Spre taz</Button>
        <Button size="small" className='button-foodpanda'>Spre foodpanda</Button>
      </CardActions>
    </Card> 


</div>
         
       ))}


<h3>Burger King</h3>
{meniu[2].map(item=>(
  <div className='flex-container'>

<Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.ebayimg.com/images/g/kSAAAOSwX1lilL45/s-l1600.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.nume}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.pret} RON
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='button-glovo'>Spre Glovo</Button>
        <Button size="small" className='buton-tazz' >Spre taz</Button>
        <Button size="small" className='button-foodpanda'>Spre foodpanda</Button>
      </CardActions>
    </Card> 


</div>
         
       ))}


</div>   */}


    </div>
  );
}

export default App;
