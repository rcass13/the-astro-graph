import React from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { useEffect, useState } from "react";
import { Card, Header, Button } from "react-bootstrap";
import { Box, Typography, Stack } from "@mui/material";
// import User from '../../../../Server/models/Users';

const HomePage = ({userData})  => {
  const [astroItems, setAstroItems] = useState(userData);
  console.log(userData)

  useEffect(() => {
    if (userData !== null){
      fetchFromAPI(userData.sign).then((data) => {
        console.log(userData.sign)
        setAstroItems(data);
        console.log(data);
      });
    }
  }, [userData]);

  return (
    userData && (
      <Card id="textBlock" className="bg-dark card border-secondary mb-3">
        <h2 className="card-title width-100% bg-dark card-title">
          Welcome {userData.name}!
        </h2>
        <h4 className="card-title width-100% text-white bg-dark  card-title">
         {userData.sign}
        </h4>

        <div id="bodyText" className="bg-dark">
          <Typography className="bg-dark">
            The color of {userData.sign} is {astroItems.color}
          </Typography>
          <Typography className="bg-dark">The current date is {astroItems.current_date}</Typography>
          <Typography className="bg-dark">Your mood of the day is {astroItems.mood}.</Typography>
          <Typography className="bg-dark">
            Today you are most compatible with people who have the sign of{" "}
            {astroItems.compatibility}.
          </Typography>
          <Typography className="bg-dark">
            Your lucky number today is {astroItems.lucky_number}.
          </Typography>
          <Typography className="bg-dark">
            Your lucky time today is {astroItems.lucky_time}.
          </Typography>
          <Typography className="bg-dark">
            As a {userData.sign},{astroItems.description}
          </Typography>
        </div>
      </Card>
    )
  );
};

export default HomePage;
