import React, { useEffect, useState } from 'react'

const StateData = () => {
    const [data, setData] = useState("");
    const url = 'https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode?countrycode=in';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a36321497emsh6fa061a7452bdd8p14121cjsnb67ac933e323',
            'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            // console.log(result[].name);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    })
    return data;
}

export default StateData
