import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';

import About from './components/About';
import Team from './components/Team';
import Card from './components/Card';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);

  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
        <div className='max-w-screen-xl mx-auto h-screen   '>
          <Header />
          <Hero />
          <About/>
          <Team/>
          <Card/>
          
          
          

        </div>
          
        </>
      )}
    </div>
  );
}

export default App;
