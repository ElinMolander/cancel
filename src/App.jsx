import { useState, useEffect, useRef } from 'react'
import { motion, useAnimate } from "framer-motion"
import './App.css'
import Button from './Button.jsx'
import backgroundImage from "./backgroundHappy.png"
import Confetti from 'react-confetti'


function App() {

  const [scope, animate] = useAnimate()
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const style = { originX:"0.5",
                  originY: "1"} 
  const [move, setMove] = useState(false)
  const [playConfetti, setPlayConfetti] = useState(false)
  const size = { with:"40px"}
  const [countpressedButton, setCountPressedButton] = useState(0)
  
  function clickHandler(){
    if (count >= 9){
      setCount(0)
      }else {
      setCount(count + 1)
      }
      confettiHandeler()
   }

   function confettiHandeler(){
    setPlayConfetti(preState => !preState)
      setCountPressedButton(countpressedButton +1)  
      setTimeout(() =>{
        setPlayConfetti(false)
      },3000)
   }

  return (
    <div ref={scope} className="background" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className='wrap-main'>
        <h1>
             Happy buttons!
        </h1>
        <div className='buttons-collection'>
          <Button 
            open={open} 
            setOpen={setOpen} 
            style={size} 
            clickHandler={clickHandler}
            count={count}
            countpressedButton={countpressedButton}
          />

          <div className='confetti'>
              {playConfetti && <Confetti  colors={["#FFF","#F5FF81","#FF6F6F"]}
              confettiSource={{ x: 500, y:200, w: 100, h:100 }}
              drawShape={ctx => {
                const scale = 0.2; // Skalfaktor för att göra hjärtat hälften så stort
                ctx.beginPath();
                ctx.moveTo(75 * scale, 40 * scale);
                ctx.bezierCurveTo(75 * scale, 37 * scale, 70 * scale, 25 * scale, 50 * scale, 25 * scale);
                ctx.bezierCurveTo(20 * scale, 25 * scale, 20 * scale, 62.5 * scale, 20 * scale, 62.5 * scale);
                ctx.bezierCurveTo(20 * scale, 80 * scale, 40 * scale, 102 * scale, 75 * scale, 120 * scale);
                ctx.bezierCurveTo(110 * scale, 102 * scale, 130 * scale, 80 * scale, 130 * scale, 62.5 * scale);
                ctx.bezierCurveTo(130 * scale, 62.5 * scale, 130 * scale, 25 * scale, 100 * scale, 25 * scale);
                ctx.bezierCurveTo(85 * scale, 25 * scale, 75 * scale, 37 * scale, 75 * scale, 40 * scale);
                ctx.fill();
                ctx.closePath();
              }}
              // tweenFunction={ 1000, 0,0,0,0 }
              />}
          </div>
          <h2 className='buttonsPressed'> Buttons pressed {countpressedButton}</h2>
        </div>
      </div>
    </div>
  )
}

export default App
