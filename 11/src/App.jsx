import { useEffect, useState } from 'react'
import ProductData from './Hooks/useProductData'
import StateData from './Hooks/useStateData';
import { ProductProvider } from './Contexts/ProductContext';
import NavBar from './Components/Header/NavBar';
import Cart from './Components/Cart/Cart';
import Cardframe from './Components/Cardframe/Cardframe';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import CreditCard from './Components/CreditCard/CreditCard';
import CashOnDelivery from './Components/CashOnDelivery.jsx/CashOnDelivery';
import Payment from './Components/Payment/Payment';
import PaymentCart from './Components/PaymentCart/PaymentCart';

function App() {
  // const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [datas, setDatas] = useState([]);
  const [states, setStates] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  // console.log(data);
  

  const addToCart = (data) => {
    let isPresent;
    cart.forEach((item) => {
      if(item.id === data.id)
        isPresent = true;
    })
    if(isPresent)
      return;
    setCart([...cart, {...data,quantity:1}]);
    console.log(cart);
    
  }

  const removeCart = () => {}

  const handaleCount = (data, num) => {
    let index;
    cart.forEach((item, idx) =>{
      if(item.id == data.id)
        index = idx;
    })
    cart[index].quantity += num;
    setCart([...cart]);
  }

  const handaleTotalAmount = () => {
    console.log("hello");
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    })
    setTotalAmount(total.toFixed(2));
  }

  const search = (inputVal) => {
    if(inputVal == "" || inputVal == " ")
      alert("Please enter something");
    console.log(inputVal);
    let arr = datas.filter((data) => {    
      if(data.title.toLowerCase().includes(inputVal.toLowerCase()))
        return data;
    })    
    setDatas(arr);
  }

  // console.log(product);
  const product = ProductData();
  // setProduct(productData);

  // const statesData = StateData();
  // console.log(state);
  
  // useEffect(() => {
  //   if(state.length > 0){
  //     useStates(statesData);
  //   }
  // })
  
  

  useEffect(() => {
    handaleTotalAmount() ;
  }, [cart])

  useEffect(() => {
    if(product.length > 0)
      setDatas(product);
  },[product])

  const CardAndCart = () => {
    return(
      <div className='flex justify-between'>
        <Cardframe />
        <Cart />
      </div>
    )
  }

  const PaymentAndCart = () => {
    return(
      <div className='flex justify-between'>
        <Payment />
        <PaymentCart />
      </div>
    )
  }

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
    {
      path: "",
      element: <CardAndCart />
    },
    {
      path: "payment",
      element: <PaymentAndCart />
      // element: <CreditCard />
    }
    ]
  }])

  return (
    <>
      <ProductProvider value={{datas, cart, totalAmount, search, addToCart, removeCart, handaleCount, handaleTotalAmount}}>
        <div className='bg-black min-h-screen'>
          {/* <NavBar />
          <div className=''>
            <Cardframe />
            <Cart />
          </div> */}
          <RouterProvider router={router} />
        </div>
      </ProductProvider>
    </>
  )
}

export default App
