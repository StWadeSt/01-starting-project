import React from 'react'
import srcImage from "../../assets/react-core-concepts.png"
import "../Header/Header.css"

const reactDescriptions = ['Fundamentals', 'Crucial', 'Core'];
function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}


const Header = () => {
   const desc = reactDescriptions[genRandomInt(2)]
  return (
    <div>
        <img src={srcImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {desc} React concepts you will need for almost any app you are
            going to build!
        </p>
    </div>
  )
}

export default Header