import React from 'react'
import MacWindows from './windows/MacWindows'
import './Resume.scss'

const Resume = () => {
  return (
    <MacWindows>
      <div className="resume-window">
        <iframe 
          src="/resume.pdf" 
          title="Resume"
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
        />
      </div>
    </MacWindows>
  )
}

export default Resume
