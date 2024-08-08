// import { useState } from 'react'
import Nav from './Components/Nav'
import Cardframe from './Components/Cardframe'
import Cart from './Components/Cart'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let isPresent = false;
    cart.forEach((present) => {
      if (present.id === item.id)
        isPresent = true;
    })
    if(isPresent === true)
      return;

    setCart([...cart , item]);
  }

  const handlingCount = (id,num) => {
    let index;
    cart.forEach((item,idx) => {
      if(item.id === id){
        index = idx;
      }
    })

    let arr = cart;
    arr[index].amount += num;
    setCart([...arr]);
    if(arr[index].amount == 0){
      arr[index].amount = 1;
      removeCart(id);
    }

    if(arr[index].amount == 11){
      arr[index].amount = 10;
    }
  }

  const  removeCart = (id) => {
    let arr = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(arr);
  }

  return (
    <>
      <Nav />
      <div className='flex justify-between'>
        <Cardframe addToCart={addToCart}/>
        <Cart cart={cart} handlingCount={handlingCount}/>
      </div>
    </>
  )
}

export default App
