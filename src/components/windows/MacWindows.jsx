import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'
const MacWindows = ({children}) => {
  return (
    <Rnd  default={{
        width: 600,   
        height: 400,  
        x: 300,
        y: 200
      }}
      minWidth={300}
      minHeight={200}
      enableResizing>
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title"><p>sakshimhaske -zsh</p></div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindows 