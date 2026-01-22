import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindows from './windows/MacWindows'
import './Note.scss'
const Note = () => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/notes.md')   
      .then(res => res.text())
      .then(text => setMarkdown(text))
  }, [])

  return (
    <MacWindows>
      <div className="note-window">
        {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>}
      </div>
    </MacWindows>
  )
}

export default Note
