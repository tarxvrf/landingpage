import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  const word={
    words: [' full stack developer', ' passionate about coding']
  }
  return (

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
          <img
            src="../assets/bghero.png "
            className="sm:order-1 order-2 lg:w-3/5 rounded-lg shadow-2xl shadow-white animate-pulse"
          />
          <div className="w-full pb-10 sm:pt-10 order-1">
            <h1 className="lg:text-start text-center text-8xl animate-bounce">Tulus-dev</h1>
            <br />
            <br />
            <h1 className="lg:text-start lg:text-3xl text-3xl font-bold text-center text-purple-500">Welcome</h1>
                     
            <p className="lg:text-start text-center py-6 text-xl sm:text-2xl">Hello, I am 
            <Typewriter 
            words={ word.words}
            loop={true}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}        
           />
            </p>
            <div className="flex justify-center lg:justify-start"><button className=" btn btn-warning btn-sm">Get Started</button></div>
          </div>
        </div>
      </div>
   
  );
};

export default Hero;
