import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';




const App = () => (
    <BrowserRouter>
        <Box>
            <Routes>
                {/* example <Route path="/" exact element={ <Frontpage />}/> */}
                <Route/>
                <Route/>
                <Route/>
            </Routes>
        </Box>
    </BrowserRouter>
    
)
  

export default App