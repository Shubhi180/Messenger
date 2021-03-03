import React, { useEffect, useState } from "react";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase"
import FlipMove from 'react-flip-move';

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("");


  useEffect(() => {
    //run when the app component load
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])


  useEffect(() => {
    setUsername(prompt('Enter ur name...'))
  }, [])



  //code
  //if its black--inside the  dependancy--then it run once viceversa
  //condition/named/which one u want to change
  //useState = variable in React
  //useEffect = run code on a condition in React



  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }




  return (
    <div className="App">
      <img width="70px" height="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/512px-Facebook_Messenger_logo_2018.svg.png"></img>
      <h1>❤️Messenger❤️</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formcontrol">
          <Input className="app_input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />


          <IconButton className="app_iconbutton" disabled={!input} variant="contained" color="primary"
            type="submit" onClick={sendMessage}><SendIcon /></IconButton>
        </FormControl>

      </form>



      <FlipMove>
        {messages.map(({ id, message }) => (
            <Message
              key={id}
              username={username}
              message={message} />

          ))
        }

      </FlipMove>






    </div>
  );
}

export default App;
