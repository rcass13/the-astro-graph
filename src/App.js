import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './styles/bootstrap.min.css'; // Added this :boom:






// import Login from './components/Login';
// import CreateAccount from './components/CreateAccount';

import {HomePage} from './components';




import Login from './pages/Login';

const App = () => (
    <BrowserRouter>
    
        <Box>
            <Routes>
                {/* example <Route path="/" exact element={ <Frontpage />}/> */}
                
                <Route path="/Login" exact element ={<Login/>}/>
                {/* <Route path="/Login" exact element ={<CreateAccount/>}/> */}
                <Route/>

                {/* <Route/>
                <Route/>
                <Route/> */}
                <Route path="/" exact element={ <HomePage/> }/>

            </Routes>
        </Box>
    </BrowserRouter>
    
)
  

export default App