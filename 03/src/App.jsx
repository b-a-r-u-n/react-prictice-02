import { useState ,useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ");
  const [btnText, setBtnText] = useState("Copy");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed === true)
      str += "1234567890";
    if(charAllowed === true)
      str += "!@#$%^&*()_+~`|}{[]:;?><";
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); 
    }
    // console.log(pass);
    setPassword(pass);
  } ,[numberAllowed, charAllowed, length])

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, length, passwordGenerator])

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setBtnText("Copied!");
    setTimeout(() => {
      setBtnText('Copy');
    }, 5000);
  }

  return (
    <>
      {/* <div className="h-screen w-screen bg-black"> */}
        <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-11 bg-gray-800 text-orange-500">
          <h1 className="text-center text-2xl font-semibold">
            Password Generator
          </h1>
          <div className="mt-4 flex">
            <input 
              type="text" 
              name="" 
              id=""
              placeholder="Password"
              readOnly
              value={password}
              ref={passwordRef}
              className="w-[85%] h-[5vh] pl-3 rounded-l-lg outline-none"
            />
            <button 
              className="w-[15%] bg-blue-700 text-center rounded-r-lg font-medium"
              onClick={copyToClipboard}
            >
              {btnText}
            </button>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex gap-x-2">
              <input 
                type="range" 
                value={length}
                min={7} 
                max={50}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="">Length: {length}</label>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" 
                name="" 
                id="Number"
                onChange={() => {
                  setNumberAllowed(!numberAllowed)
                }} 
              />
              <label htmlFor="Number">Number</label>
            </div>
            <div className="flex gap-x-2">
              <input 
                type="checkbox" 
                name="" 
                id="character" 
                onChange={() => {
                  setCharAllowed(!charAllowed);
                }}
              />
              <label htmlFor="character">Special character</label>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default App
