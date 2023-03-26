import React, {useEffect, useRef, useState} from 'react';
import {DialogsUser, MessagesType} from "../../App";
import Message from "./Messages/Message";
import cl from "./DisplayChat.module.css"

export type DisplayChatPropsType = {
    users: DialogsUser
    messagesData: MessagesType[]
}

const DisplayChat: React.FC<DisplayChatPropsType> = (props) => {
    const {messagesData, users} = props

    const messagesList = messagesData.map(message => {
        return (
            <div key={message.id}>
                <Message messages={message} users={users}/>
            </div>
        )
    })

    const displayWrapper = useRef<HTMLDivElement>(null)

    const onLoadDisplayObserver = () => {
        const scrollHeight = displayWrapper.current?.scrollHeight || 0
        scrollHeight > 0 && displayWrapper.current?.scrollTo(0, scrollHeight)
    }


    return (
        <div ref={displayWrapper} className={cl.wrapper} onLoad={onLoadDisplayObserver}>
            {messagesList}
        </div>
    )
};

export default DisplayChat;