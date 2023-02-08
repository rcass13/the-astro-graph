import React from 'react'
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useEffect } from 'react'; 

const Test = () => {
    useEffect(() =>  {
        console.log(fetchFromAPI(""));
    }, [])
  return (
    <div>Test</div>
  )
}

export default Test