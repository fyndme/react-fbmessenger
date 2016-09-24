# React components to generate a similar chat look to Facebook messenger
Useful to create mockups of messenger bot examples  
![Screenshot](/demo.png?raw=true "Screenshot")

## Installation
````bash 
$ npm install --save react-fbmessenger
````

## Usage
The main components are `Conversation` and `Container`. 
- Conversation creates the chat bubbles and takes 3 props 
  - conversation: An `array` of [facebook send api](https://developers.facebook.com/docs/messenger-platform/send-api-reference) messages
  - page_id: A `string` of the page's id, in order to differentiate the user vs bot's messages
  - postbackCallback: A `function(payload)` called when the viewer clicks a postback button
- Container creates a chat box that includes the chat bubbles and a text entry area
  - *Conversation's props*
  - userTextCallback: A `function(text)` called when the user enters a text string
  - textFocusCallback: A `function()` called when the user clicks on the text area
  - textBlurCallback: A `function()` called when the text area loses focus
 
````javascript
import React from 'react';
import ReactDOM from 'react-dom'
import { Conversation } from 'react-fbmessenger'

const convo = [
{
  "recipient":{
    "id":"1"
  },
  "message":{
    "text":"hello user"
  }
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "text":"hello bot"
  }
},
];

ReactDOM.render(
  <Conversation conversation={convo} page_id="1" />, 
  document.getElementById('root')
);

````
Example: https://fynd.me (demos and chat widget)
