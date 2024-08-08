import { useState } from 'react'
import { Input } from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmmount, setConvertedAmmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.log(options);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmmount);
    setConvertedAmmount(amount);
  }

  const convert = () => {
    setConvertedAmmount(amount * currencyInfo[to]);
  }

  return (
   <>
    <div className='h-screen bg-no-repeat bg-cover flex justify-center items-center'
      style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/05/50/33/47/360_F_550334715_0d2cdaljV4Xd3x7yVUhRxfmLLEUyMdXr.jpg")`}}
    >
      <div className='bg-gray-400 px-4 py-5 rounded-xl '>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            // convert();
          }}
        >
        <Input 
          label="From"
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          oncurrencyChange={(currency) => setFrom(currency)}
          currencyOptions={options}
          selectedCurrency={from}
        />
        <div className='flex justify-center'>
          <button 
            onClick={swap}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'
          >
            Swap
          </button>
        </div>
        <Input 
          label="To"
          amount={convertedAmmount}
          onAmountChange={(convertedAmmount) => setConvertedAmmount(convertedAmmount)}
          oncurrencyChange={(currency) => setTo(currency)}
          currencyOptions={options}
          selectedCurrency={to}
        />
        <div className='flex justify-center mt-8'>
        <button 
          onClick={convert}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-[70%]'
        >
          Convert
        </button>
        </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default App
