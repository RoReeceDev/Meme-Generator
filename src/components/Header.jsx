import React from 'react'
import troll from '/images/troll-face.png'

const Header = () => {

    return (
        <header>
          <div className="header-left">
          <img src={troll}/>
          <h2>Meme Generator</h2>
          </div>
          <div className="header-right">
          <h4>React Course - Project 3</h4>
          </div>
        </header>
    )
}

export default Header