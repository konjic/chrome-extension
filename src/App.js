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
<Menu/>
<Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/mcdonalds' element={<McDonalds/>} />
            {/* <Route path='/kfc' element={<KFC/>} />
            <Route path='/burgerking' element={<BurgerKing/>} /> */}
          </Routes>


    </div>
  );
}

export default App;
