import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Path from './components/Test';




const App = () => (
    <BrowserRouter>
        <Box>
            <Routes>
                {/* example <Route path="/" exact element={ <Frontpage />}/> */}
                {/* <Route/>
                <Route/>
                <Route/> */}
                <Route path="/path" exact element={ <Path/> }/>
            </Routes>
        </Box>
    </BrowserRouter>
    
)
  

export default App