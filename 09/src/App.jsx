import { useEffect, useState } from 'react'
import { ThemeProvider } from './Contexts/themeContexts'
import Card from './Components/Card';
import Button from './Components/Button';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  }

  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
  
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className='min-h-screen flex justify-center items-center'>
          <div className='w-2/5 border border-blue-400'>
            <div className='flex justify-end'>
              <Button />
            </div>
            <Card />
          </div>
        </div>
      </ThemeProvider>
    
  )
}

export default App
