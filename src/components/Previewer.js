import React from 'react'
import PropTypes from 'prop-types'

let marked = window.marked;
marked.setOptions({
  breaks: true
})

const Previewer = (props) => {
  let html = marked(props.text)
  return (
    <div id="preview-wrapper">
      <div id="preview-bar"><h2 className="div-title">Preview</h2></div>
      <div id="preview" dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  )
}

export default Previewer;
