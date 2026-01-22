import React from 'react';
import './dock.scss';

const Dock = ({ windowsstate, setwindowsstate }) => {

  const icons = [
    { name: 'github', src: '/github icon.jpg' },
    { name: 'note', src: '/notes.webp' },
    { name: 'spotify', src: '/spotify.webp' },
    { name: 'cli', src: '/cli.jpg' },
    { name: 'pdf', src: '/pdf icon.webp' },
    { name: 'email', src: '/email.webp' },
    { name: 'calendar', src: '/calender.webp' },
    { name: 'link', src: '/link.jpg' },
  ];

  return (
    <footer className='dock'>
      {icons.map(icon => (
        <div
          key={icon.name}
          className={`icon ${icon.name}`}
          onClick={() => {
            
            setwindowsstate(prev => ({
              ...prev,
              [icon.name]: !prev[icon.name]
            }));
          }}
        >
          <img src={icon.src} alt={icon.name} />
        </div>
      ))}
    </footer>
  );
};

export default Dock;
