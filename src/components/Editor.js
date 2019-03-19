import React from 'react'
import PropTypes from 'prop-types'

const Editor = (props) => {
  return (
    <div id="editor">
      <div id="editor-bar"><h2 className="div-title">Editor</h2></div>
      <textarea onChange={props.onChange} value={props.value}></textarea>
    </div>
  )
}

export default Editor
