import React from 'react';
import { fetchFromAPI } from '../../utils/fetchFromApi';
import { useEffect, useState } from 'react'; 
import { Box, Typography, Stack} from '@mui/material';
// import User from '../../../../Server/models/Users';


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
            <Box id="bodyText" className="bg-none">
                    <h1>Welcome User <small class="text-muted">{astroItems.sign}</small></h1>
                    <Typography>The color of {astroItems.sign} is {astroItems.color}</Typography>
                    <Typography>The current date is {astroItems.current_date}</Typography>
                    <Typography>Your mood of the day is {astroItems.mood}</Typography>
                    <Typography>Today you are most compatible with people who have the sign of {astroItems.compatibility}</Typography>
                    <Typography>Your lucky number today is {astroItems.lucky_number}</Typography>
                    <Typography>Your lucky time today is {astroItems.lucky_time}</Typography>
                    <Typography>As a {astroItems.sign},{astroItems.description}</Typography>
                    
            </Box>
        )
    
    
}   

export default HomePage;