import React, {ChangeEvent, useState} from 'react';
import cl from './sendMessage.module.css'

export type SendMessagePropsType = {
    sendMessage: (text: string) => void
    isHost: boolean
}

const SendMessage:React.FC<SendMessagePropsType> = (props) => {

    const [text, setText] = useState<string>('')
    const [areaTextHeight, setAreaTextHeight] = useState<number>(30)

    const textAreaStyle = {
        height: (text.trim() ? areaTextHeight : 30) + 'px' // empty text making height 30px
    }
    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAreaTextHeight(e.currentTarget.scrollHeight) // setting new height textarea
        setText(e.currentTarget.value) // setting text by input and display it in value textarea
    }

    const onClickButtonHandler = () => {
        text.trim() && props.sendMessage(text) // empty text not sending
        setText('') // clean input after send
    }

    const styleWrapper = {
        backgroundColor: props.isHost ? '#699869' : '#69a8af'
    }

    return (
        <div style={styleWrapper} className={cl.sendAreaWrapper}>
            <textarea
                style={textAreaStyle}
                className={cl.textArea}
                value={text}
                onChange={onChangeTextAreaHandler}
            >
            </textarea>
            <button className={cl.button} onClick={onClickButtonHandler}>Send</button>
        </div>
    );
};

export default SendMessage;