import React from 'react';
import {DialogsUser, MessagesType} from "../../../App";
import cl from "./message.module.css"

export type MessagesPropsType = {
    users: DialogsUser
    messages: MessagesType
}

const Message: React.FC<MessagesPropsType> = (props) => {
    const {id, name, text, time} = props.messages
    const {host, friends} = props.users

    const isHostMessage = name === host.name
    const avatar = friends.find(user => user.name === name)?.avatar || host.avatar;
    //styles
    const styleWrapper = cl.messageWrapper + ' ' + (isHostMessage ? '' : cl.friendWrapper)
    const styleInner = cl.messageInner + ' ' + (isHostMessage ? '' : cl.friendInner)
    const styleImg = cl.img + ' ' + (isHostMessage ? '' : cl.imgFriend)
    const styleText = cl.text + ' ' + (isHostMessage ? '' : cl.textFriend)


    return (
        <div key={id} className={styleWrapper}>
            {/*<div className={cl.name}>{name}</div>*/}
            <div className={styleInner}>
                <img src={avatar} alt={"avatar " + name} className={styleImg}/>
                <div className={styleText}>
                    <div className={cl.name}>{name}</div>
                    {text}
                </div>
            </div>
            <span className={cl.time}>{time}</span>
        </div>
    );
}

export default Message;