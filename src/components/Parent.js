import React from 'react'
import PropTypes from 'prop-types'
import Editor from './Editor'
import Previewer from './Previewer'

let placeholder =
`# Welcome to the Markdown Previewer!
## This is a secondary heading or "h2"

## Emphasis
How to **bold**
How to _italics_
How to **_both_**

## Links
Here is a link to [FreeCodeCamp](https://freecodecamp.org)

## Code
Use backticks to type code \`like this\`
or multiple backticks "\`\`\`" for code blocks
\`\`\`
function thisIsACodeBlock(name) {
  return "Hi " + name + "!";
}
\`\`\`

## Lists
Start list items with dashes for an unordered list:
- like so
  - indent like so
    - and again
Use the number 1 to start ordered lists:
1. I am item 1
1. And I am item 2
  1. or indent..
  1. to nest another list
  1. ordered...
    - or not

## Blockquotes
Blockquote lines begin with ">"
> I am a blockquote
> I am a continuation

## Images
Images use the following syntax: ![alt text](url)
![cat picture](https://www.icenews.is/wp-content/uploads/2018/03/cat-3062647_1920-700x467.jpg)
`

class Parent extends React.Component {
  state = {
    text: placeholder
  }

  onChange = (e) => {
    let value = e.target.value;
    this.setState({
      text: value
    })
  }

  render () {
    return (
      <div id="wrapper">
        <Editor onChange={this.onChange} value={this.state.text}/>
        <Previewer text={this.state.text} />
      </div>
    )
  }
}

export default Parent;
