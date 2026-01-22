import React from 'react'
import MacWindows from './MacWindows'
import Terminal from 'react-console-emulator'
import './cli.scss' 

const Cli = () => {
  const commands = {
    about: {
      description: 'Learn more about me',
      usage: 'about',
      fn: () =>
        `Hi! I'm Sakshi Mhaske, a passionate Software Developer from Nagpur, Maharashtra. I love building responsive web apps using React.`,
    },
    projects: {
      description: 'List my projects',
      usage: 'projects',
      fn: () =>
        `Portfolio Website - github.com/sakshimhaske/portfolio
Task Manager App - github.com/sakshimhaske/task-manager
Weather Dashboard - github.com/sakshimhaske/weather-dashboard`,
    },
    contact: {
      description: 'My contact information',
      usage: 'contact',
      fn: () =>
        `Email: email@example.com
Phone: +91 98765 43210`,
    },
    linkedin: {
      description: 'My LinkedIn profile',
      usage: 'linkedin',
      fn: () => 'https://linkedin.com/in/sakshimhaske',
    },
    github: {
      description: 'My GitHub profile',
      usage: 'github',
      fn: () => 'https://github.com/sakshimhaske',
    },
  }

  return (
    <MacWindows>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`Welcome to Sakshi Mhaske's Portfolio Terminal!\nType 'help' to see all available commands.`}
          promptLabel={'sakshimhaske:~$ '}
          style={{ height: '100%', overflowY: 'auto' }}
        />
      </div>
    </MacWindows>
  )
}

export default Cli
