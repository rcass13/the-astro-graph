import React from 'react';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useEffect, useState } from 'react'; 
import { Box, Typography, Stack} from '@mui/material';


const HomePage = () => {
    const [astroItems, setAstroItems] = useState(null);

    useEffect(() =>  {
        fetchFromAPI().then((data) => {
            setAstroItems(data)
            console.log(data)
        }) 
    }, [])
    
        
        
        return (
            astroItems &&
            <Box minHeight="90vh" sx={{ bgcolor: 'gray'}}>
                <Box>
                    <Typography>Color of Your Birth Sign is: {astroItems.color}</Typography>
                </Box>
                <Box>
                    <Typography>Your Lucky Number is: {astroItems.lucky_number}</Typography>
                </Box>
            </Box>
        )
    
    
}   

export default HomePage;