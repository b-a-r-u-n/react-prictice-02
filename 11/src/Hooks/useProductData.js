import { useEffect, useState } from "react";


const ProductData = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        let responce = await fetch("https://fakestoreapi.com/products");
        let datas = await responce.json();
        setData(datas);
    }
    useEffect(() => {
        fetchData();
    },[])
    // console.log(data);
    return data;
}

export default ProductData;