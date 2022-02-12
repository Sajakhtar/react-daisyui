import Hero from './components/Hero';
import Navbar from './components/Navbar';

import { useEffect } from 'react'
import { themeChange } from 'theme-change'


function App() {

  useEffect(() => {
    themeChange(false)
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
