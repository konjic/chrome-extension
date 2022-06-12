import React from 'react'
import Button from '@mui/material/Button';


function Menu() {



  return (
    <div className='menu-container'>
        
        
         <Button href="/" className='buton-tot' variant="contained">Tot</Button>
         <Button href="/mcdonalds" className='buton-mcd' variant="contained">McDonalds</Button>
         <Button href="/kfc" className='buton-kfc' variant="contained">KFC</Button>
         <Button href="/burgerking" className='buton-bk' variant="contained">BurgerKing</Button>

    </div>
  )
}

export default Menu