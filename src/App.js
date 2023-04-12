import React, {useState} from 'react';
import './App.css';

const App = () => {
  const  [input, setInput] = useState("");
  const  [result, setResult] = useState(0);

  const handler = e => {
   setInput(e.target.value);
    
  }
  

  return (
    <div className="App">
    <div className="App-input">
    <div className="inputClass">
    <input type="text" value={input} name="input" onChange={handler} />
    </div>
    
    <br />
    <button className='Button-result' onClick={() => setResult(eval(input)) }>Result</button>
 : {result}
    
     
     <br />
    </div>
    <center>
    
   <div className="App-insertions">
      <button className='Button_AC' onClick={() => setInput("")}>AC</button>
     <button className='Button_01'  onClick={() => setInput(input+'/')}>/</button>
     <button className='Button_02'  onClick={() => setInput(input+'*')}>*</button>
      
      
      <button className='Button_03' onClick={() => setInput(input+'%')}>%</button>
     <button className='Button-'  onClick={() => setInput(input+'-')}>-</button>
     <button className='Button+'  onClick={() => setInput(input+'+')}>+</button>
      
      
      <button className='Button_1'  onClick={() => setInput(input+'1')}>1</button>
      <button className='Button_2'  onClick={() => setInput(input+'2')}>2</button>
      <button className='Button_3'  onClick={() => setInput(input+'3')}>3</button>
      
      
      <button className='Button_4'  onClick={() => setInput(input+'4')}>4</button>
     <button className='Button_5' onClick={() => setInput(input+'5')}>5</button>
     <button className='Button_6'  onClick={() => setInput(input+'6')}>6</button>
      
     <button className='Button_7'  onClick={() => setInput(input+'7')}>7</button>
     <button className='Button_8'  onClick={() => setInput(input+'8')}>8</button>
     <button className='Button_9'  onClick={() => setInput(input+'9')}>9</button>
     
     
      <button className='Button_0'  onClick={() => setInput(input+'0')}>0</button>
      



    </div>
    
    
     
     
     
     
     
    </center>
   
  
    </div>
  );
}

export default App;
