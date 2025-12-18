import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [ws , setWs] = useState()
 const inputRef = useRef("");

  function sendMessage(){
    //@ts-ignore
    const input:String = inputRef.current.value;
    //@ts-ignore
    ws.send(input)
  }


  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    // @ts-ignore
    setWs(ws);

    ws.onmessage = (ev)=>{
      console.log(ev.data);
    }
    
  },[])

  return (
    <div>
      {/* @ts-ignore */}
      <input type='text' ref={inputRef} placeholder='message...'/>
      <button onClick={sendMessage}>SEND</button>
    </div>
  )
}

export default App
