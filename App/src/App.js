import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './styles/bootstrap.min.css'; // Added this :boom:





import Login from './pages/Login';
import HomePage from './pages/Homepage';




    

const App = () =>{ 
let userId = 0
const [isAuth, setIsAuth] = useState(false);
useEffect( () => {
    getUserInfoApi();
}, [])

function getUserInfoApi() {
    fetch('http://localhost:3001/api/auth/', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        setAuth(data.isAuth)
        userId = data.id
        console.log(userId)
      })
      .catch(error => {
        console.error('Error:', error);
      });
}
const setAuth = (val) => {
  console.log(val)
  setIsAuth(val)
}
    
    console.log(isAuth)
    
    return <BrowserRouter>
        {isAuth ?

            <Routes>
                <Route path="/" exact element={ <HomePage userData={isAuth?.user} /> }/>
                <Route path="*" element={<HomePage userData={isAuth?.user}/> }/>
                {/* <Route path="/" exact element={ <HomePage userData={{name:"test",sign:"aries"}} /> }/>
                <Route path="*" element={<HomePage userData={{name:"test",sign:"aries"}}/> }/> */}
            </Routes>
            :
            <Routes>
                <Route path="/" exact element ={ <Login setAuth={setAuth}/> }/>
                <Route path="*" element ={ <Login setAuth={setAuth}/> }/>
            </Routes>
        }
    </BrowserRouter>
    }
  

export default App;