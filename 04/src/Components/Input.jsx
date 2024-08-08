import React from 'react'

const Input = ({label, amount, onAmountChange,currencyOptions = [], selectedCurrency = "usd", oncurrencyChange}) => {
  return (
    <div className='w-[30vw] bg-black text-white px-4 py-3 rounded-xl flex flex-col gap-5'>
      <div className='flex justify-between'>
        <h1>{label}</h1>
        <h1>Currency Type</h1>
      </div>
      <div className='flex justify-between'>
        <input 
            type="number" 
            name="" 
            id=""
            placeholder='Amount'
            value={amount}
            onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}
            className='text-black font-semibold pl-2 w-[30%] rounded-lg outline-none border-none'
        />
        <select 
            name="" 
            id=""
            value={selectedCurrency}
            onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
            className='text-black font-semibold pl-2 w-[20%] rounded-lg outline-none border-none'
        >
            {
                currencyOptions.map((currency) => {
                    return(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    )
                })
            }
        </select>
      </div>
    </div>
  )
}

export default Input
