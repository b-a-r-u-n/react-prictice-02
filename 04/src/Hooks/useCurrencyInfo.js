import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetchData(); 
    },[currency])
    const fetchData = async () => {
        let responce = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        let convertedjson = await responce.json();
        // console.log(convertedjson);
        setData(convertedjson[currency]);
    }
    // console.log("hello",data);
    return data;
}

export default useCurrencyInfo;