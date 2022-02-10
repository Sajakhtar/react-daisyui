import Hero from './components/Hero';

import { useEffect } from 'react'
import { themeChange } from 'theme-change'


function App() {

  useEffect(() => {
    themeChange(false)
  }, [])


  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
