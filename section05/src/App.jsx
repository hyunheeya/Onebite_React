import './App.css'
// import Header from './components/Header'
// import Main from './components/Main'
// import Footer from './components/Footer'
// import Button from './components/Button'
// import { useState } from "react"

// function App() {

//   const buttonProps = {
//     text: "메일",
//     color: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   }

//   return (
//     <>
//       <Button {...buttonProps}/>
//       <Button text={"카페"}/>
//       <Button text={"블로그"}>
//         <Header/>
//       </Button>
//     </>
//   )
// }




// const Bulb = ({ light }) => {
//   console.log(light)
//   return (
//     <div>
//       {light === "ON" ? (
//         <h1 style={{ backgroundColor: "orange"}}>ON</h1>
//       ) : (
//         <h1 style={{ backgroundColor: "gray"}}>OFF</h1>
//       )}
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)
//   const [light, setLight] = useState("OFF")

//   return (
//   <>
//     <div>
//       <Bulb light={light} />
//       <button
//         onClick={() => {
//           setLight(light === "ON" ? "OFF" : "ON")
//         }}
//       >
//         {light === "ON" ? "끄기" : "켜기"}
//       </button>
//     </div>
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>+</button>
//     </div>
//   </>
//   )
// }


// import Bulb from './components/Bulb'
// import Counter from './components/Counter'

// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   )
// }



import Register from './components/Register'
// function App() {
//   return (
//     <>
//       <Register />
//     </>
//   )
// }


import HookExam from './components/HookExam'

function App() {
  return (
    <>
      <HookExam />
    </>
  )
}

export default App