import React, {useState} from 'react';
import './App.css';
import DisplayChat from "./components/DisplayChat/DisplayChat";
import SendMessage from "./components/Sendmessage/SendMessage";
import message from "./components/DisplayChat/Messages/Message";

//users in dialog
export type UserFromDialog = {
  userId: number
  name: string
  avatar: string
}
export type DialogsUser = {
  host: UserFromDialog
  friends: UserFromDialog[]
}
const dialogsUsers: DialogsUser = {
  host: {
    userId: 1,
    name: 'Anatoliy',
    avatar: 'https://i.pravatar.cc/30?img=3'
  },
  friends: [
    {
      userId: 2,
      name: 'Dima',
      avatar: 'https://i.pravatar.cc/30?img=7'
    }
  ]
}

//messages
export type MessagesType = {
  id: number
  name: string
  text: string
  time: string
}
const startMessages = [
  {
    id: 1,
    name: 'Anatoliy',
    text: 'hey',
    time: '20:02'
  },
  {
    id: 2,
    name: 'Dima',
    text: 'hi, how are you?',
    time: '20:03'
  },
  {
    id: 3,
    name: 'Anatoliy',
    text: 'I am fine! What are you doing?',
    time: '20:04'
  },
  {
    id: 4,
    name: 'Dima',
    text: 'I drink coffee',
    time: '20:05'
  }
]


function App() {
  const [messages, setMessages] = useState<MessagesType[]>(startMessages)

  const sendMessage = (text:string, name: string) => {
    const newMessage = {
      id: messages[messages.length-1].id + 1,
      name: name,
      text: text,
      time: new Date().toLocaleTimeString().slice(0, -3)
    }
    setMessages([...messages, newMessage])
  }

  const sendMessageHost = (text:string) => {
    sendMessage(text, dialogsUsers.host.name)
  }

  const sendMessageFriend = (text:string) => {
    sendMessage(text, dialogsUsers.friends[0].name)
  }

  return (
    <div className="App">
      <DisplayChat messagesData={messages} users={dialogsUsers}/>
      <div className="sendWrapper">
        <SendMessage
            sendMessage={sendMessageFriend}
            isHost={false}
        />
        <SendMessage
            sendMessage={sendMessageHost}
            isHost={true}
        />
      </div>

    </div>
  );
}

export default App;
