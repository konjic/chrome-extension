
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

    setMeniu(response.map(r => r.meniu))  // <----------- SAVES VALUES

   console.log(meniu)


  };

  useEffect(() => {
    getApiData();
  }, []);



 




  return (
    <div className="App">

      

 {users &&
        users.map((user) => (
          <div className="item-container" key={user._id}>
            Id: <b> {user.restaurant} </b>  <br/>
              

          </div>
        ))
         }  


{meniu[0].map(item=>(
  <div>
<p>{item.nume} {item.pret}</p>

</div>
         
       ))}


    </div>
  );
}

export default App;
