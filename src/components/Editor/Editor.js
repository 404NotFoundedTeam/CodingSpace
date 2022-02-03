import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompressAlt, faCopy, faExpandAlt} from '@fortawesome/free-solid-svg-icons'
import EditorWrapper from "./EditorWrapper";
import Button from "../button/Button";

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  const [copy, setCopy] = useState("Copy this code!")

  function handleChange(editor, data, value) {
    onChange(value)
  }

  function copyCode() {
      navigator.clipboard.writeText(value)
          .then(() => {
              setCopy("Copied!")
              setTimeout(() => {
                  setCopy("Copy this code!")
              }, 1000)
          })
          .catch(() => console.log("error clipboard"))
  }

  return (
      <EditorWrapper className={`editor-container ${open ? '' : 'collapsed'}`}>
              <div className="editor-title d-flex align-items-center">
                  {displayName}
                  <div className="d-flex align-items-center">
                      <Button className={"copy-btn me-2"} onClick={() =>{copyCode()}}>
                          <FontAwesomeIcon icon={faCopy}/>
                          <span className="copy-modal">
                              {copy}
                          </span>
                      </Button>
                      <Button type="button" onClick={() => setOpen(prevOpen => !prevOpen)}>
                          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                      </Button>
                  </div>
              </div>
              <ControlledEditor
                  onBeforeChange={handleChange}
                  value={value}
                  className="code-mirror-wrapper"
                  options={{
                      lineWrapping: true,
                      lint: true,
                      mode: language,
                      theme: 'material',
                      lineNumbers: true
                  }}
              />
          </EditorWrapper>
  )
}
