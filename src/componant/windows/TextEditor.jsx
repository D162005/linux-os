import React from 'react'
import Window from './../Window.jsx'
import './TextEditor.scss'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import noteContent from './../../Data/note.txt?raw'


const TextEditor = ({ setIsWindowOpen }) => {

  const markdown = noteContent

  return (
    <Window Window_title="Text Editor < Details >" className="text-editor-window " setIsWindowOpen={setIsWindowOpen} label="text_editor">
      <div className="text-editor-content">
        {markdown ? (
          <SyntaxHighlighter 
            language="typescript" 
            style={atomOneDark}
            wrapLines={true}
            wrapLongLines={true}
            customStyle={{
              lineHeight: '1.6',
              borderRadius: '4px',
            }}
          >
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Window>
  )
}

export default TextEditor
