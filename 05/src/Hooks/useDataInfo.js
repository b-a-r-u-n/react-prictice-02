import { useEffect, useState } from "react";


const useDataInfo = (setLoading, setError) => {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        try {
            let responce = await fetch(`https://jsonplaceholder.typicode.com/photos`);
            let data = await responce.json();
            console.log(data);
            setFetchedData(data);
            setLoading(false);
        } catch (error) {
            console.log("Error");
            
            setTimeout(() => {
                setLoading(false);
                setError(true);
            }, 5000);
        }
    }
    return fetchedData;
}

export default useDataInfo;