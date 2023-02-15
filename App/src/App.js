import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import { Box } from '@mui/material';
import './styles/bootstrap.min.css'; // Added this :boom:






// import Login from './components/Login';
// import CreateAccount from './components/CreateAccount';

// import { HomePage } from './components';
import Login from './pages/Login';
import HomePage from './pages/Homepage';




    

const App = () =>{ 
const [isAuth, setIsAuth] = useState(false);
const [userInfo, setUserInfo] = useState()
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
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

    const setAuth = (val) => {
        setIsAuth(val)
    }
    console.log(isAuth)
    return <BrowserRouter>
        {isAuth ?

            <Routes>
                <Route path="/" exact element={ <HomePage /> }/>
                <Route path="*" element={<HomePage/> }/>
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