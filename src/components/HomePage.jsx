import React from 'react';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useEffect, useState } from 'react'; 
import { Box, Typography } from '@mui/material';


const HomePage = () => {
    const [astroItems, setAstroItems] = useState(null);

    useEffect(() =>  {
        fetchFromAPI().then((data) => {
            setAstroItems(data)
            console.log(data)
        }) 
    }, [])
    if (astroItems !== null){
        const { color, compatibility, current_date, date_range, description, lucky_number, lucky_time, mood } = astroItems
        return (
            <Box>
            
                <Typography> {color} </Typography>
                <Typography> {current_date} </Typography>
            </Box>
        )
    }
    return null;
}   

export default HomePage;