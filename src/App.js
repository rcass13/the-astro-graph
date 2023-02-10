import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import { Box } from '@mui/material';
import './styles/bootstrap.min.css'; // Added this :boom:






// import Login from './components/Login';
// import CreateAccount from './components/CreateAccount';

import { HomePage } from './components';
import Login from './pages/Login';


const App = () => (
    <BrowserRouter>
    
        <Box>

const App = () =>{ 
const [isAuth, setIsAuth] = useState(false);
const [userInfo, setUserInfo] = useState()
useEffect(()=>{
const asyncApiAuthCall = async ()=>{
    // const userData={
    //     user:"test@test.com",
    //     password:"123password"
    // }
    // const options={
    //     method:"POST",
    //     body:JSON.stringify(userData),
    //     header:{}
    // }
    // fetch("http://locahost:4000/api/auth",options)
    // .then(data=>data.json())
    // .then(data=>setUserInfo(data))
    // .catch(e=>console.log("error"))

    // let response =await utilApiCall()
    // if(response){
    //     setIsAuth(true)
    // }else {
    //     setIsAuth(false)
    // }
}
asyncApiAuthCall()
},[])
    return <BrowserRouter>
        {isAuth ?

            <Routes>
                <Route path="/" exact element={ <HomePage/> }/>
                {/* <Route path="/users" exact element= {<Users/>} /> */}
                <Route path="*" element={<div>404 Not Found</div>}/>
            </Routes>
            :
            <Routes>
                <Route path="/" exact element ={ <Login/> }/>
                <Route path="*" element ={ <Login/> }/>
            </Routes>
        }
    </BrowserRouter>
    }
  

export default App;