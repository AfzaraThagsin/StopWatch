
import React, { useState, useRef, useEffect } from 'react';
import './StopWatchComponent.css';



const StopwatchComponent = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [Running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef=useRef(0);

  useEffect(() => {
    if(Running){
      intervalRef.current=setInterval(()=>
      {
        setElapsedTime(Date.now() -startTimeRef.current);
      },10);
    }
    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, [Running]);

  const startHandler = () => {
   
    setRunning(true);
    startTimeRef.current=Date.now()-elapsedTime;
  };

  const stopHandler = () => {
   
      setRunning(false);
   
  };

  const resetHandler = () => {
    setRunning(false);
    setElapsedTime(0);
  };
  
  function formatTime() {
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = elapsedTime % 1000;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

 
  return (
    <div className="App">
      <h1>STOPWATCH</h1>

      <div className="stopwatch">
        <div className='time'>
        <img  src="images.png" alt="timer logo"></img>

        <h4>TIMER</h4>
 
        <br></br>
        </div>
        <div className="show">{formatTime()}</div>
        <div className="display">
      <button onClick={startHandler} className="start-button" >START</button>
      <button className="stop" onClick={stopHandler}>STOP</button>
      <button className="reset" onClick={resetHandler}>RESET</button>
     
      </div>
      </div>
    </div>
  );
};

export default StopwatchComponent;
