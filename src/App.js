import Navbar from './Component/Navbar'
import './App.css';
import Email from './Component/Email';
import Hero from './Component/Hero';
import Project from './Component/Project';
import Skill from './Component/Skill';
import Education from './Component/Education';
import Preload from './Component/Preload';
import { useEffect, useState } from 'react';
function App() {
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2200)
  })
  return (
    <div>{isLoading? (<Preload/>):
    
    (
      <>
      <Navbar/>
      <Hero/>
      <Skill/>
      <Education/>
      <Project/>
      <Email/>
      </>
    )}
    </div>
  );
}

export default App;
