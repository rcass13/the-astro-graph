import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {HomePage} from './components';





const App = () => (
    <BrowserRouter>
        <Box>
            <Routes>
                {/* example <Route path="/" exact element={ <Frontpage />}/> */}
                {/* <Route/>
                <Route/>
                <Route/> */}
                <Route path="/" exact element={ <HomePage/> }/>
            </Routes>
        </Box>
    </BrowserRouter>
    
)
  

export default App