import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// import Login from './components/Login';
// import CreateAccount from './components/CreateAccount';

import Login from './pages/Login';

const App = () => (
    <BrowserRouter>
        <Box>
            <Routes>
                {/* example <Route path="/" exact element={ <Frontpage />}/> */}
                <Route path="/Login" exact element ={<Login/>}/>
                {/* <Route path="/Login" exact element ={<CreateAccount/>}/> */}
                <Route/>
            </Routes>
        </Box>
    </BrowserRouter>
    
)
  

export default App