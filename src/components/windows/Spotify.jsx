import React from 'react'
import MacWindows from './MacWindows'
import './spotify.scss'

const Spotify = () => {
  return (
    <MacWindows>
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/album/32CMcxPKK2F6ZJWLj0qz9b?utm_source=generator"
          width="100%"
          height="352"
          style={{ borderRadius: '12px' }}
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title="Spotify Player"
        />
      </div>
    </MacWindows>
  )
}

export default Spotify
