import React from 'react';
import {About , Contact , Services , Project} from './components'
import {Header , Footer ,Navbar} from './components2'
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Project />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
