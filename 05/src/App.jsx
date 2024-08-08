import { useState } from 'react';
import useDataInfo from './Hooks/useDataInfo'
import {Cardframe, Loading, Error} from './Components';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dataInfo = useDataInfo(setLoading, setError);
  console.log(dataInfo);

  return (
    <div className='bg-black min-h-screen'>
      {
        loading ? <Loading /> : (error ? <Error /> : <Cardframe dataInfo={dataInfo}/>)
        // error ? <Error /> : <Cardframe dataInfo={dataInfo}/>
      }
    </div>
  )
}

export default App
