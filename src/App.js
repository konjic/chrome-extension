
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const [meniu, setMeniu] = useState()

  const getApiData = async () => {
    const response = await fetch(
      "https://vercelfastfoodapi.vercel.app/fastfood/"
    ).then((response) => response.json());

    setUsers(response);

    setMeniu(response[1].meniu)  // <----------- SAVES VALUES

  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">



 {meniu &&
        meniu.map((item) => (
          <div className="item-container">
            Meniu: {item.nume} <br/>
            Pret: {item.pret}

          </div>
        ))} 



    </div>
  );
}

export default App;
