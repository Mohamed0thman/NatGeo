import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";


import { ReactComponent as Chat } from "../../assets/chat.svg";
import { action_add_chat, action_get_chat } from "../../redux/chat/chat-action";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Message from "../message/message.component";

import "./chat.styles.scss";

const client = new W3CWebSocket(
  `wss://bll51v1wp5.execute-api.us-east-2.amazonaws.com/prod?token=${localStorage.getItem(
    "token"
  )}`
);

const ChatApp: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [openChat, setOpenChat] = useState<boolean>(false);
  const chat = useSelector((state: any) => state.chat);
  const user = useSelector((state: any) => state.user);
  const messageInput = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [userName, setUserName] = useState(() => {
    const GetUser = window.localStorage.getItem("user");
    return GetUser !== null ? JSON.parse(GetUser) : "";
  });

  const scrollToBottom = () => {
    messagesEndRef.current!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chat.chatHistory]);

  useEffect(() => {
    dispatch(action_get_chat());
    client.onopen = () => {
      console.log("websocket connected!");
    };
    client.onmessage = (message) => {
      const messageData: string = message.data as string;
      const messageParsed = JSON.parse(messageData);

      dispatch(action_add_chat(messageParsed));
    };
  }, [location.pathname]);

  const handelAddEmoj = (e: any) => {
    messageInput.current?.focus();
    setMessage(message + e.target.innerHTML);
  };

  const handleChange = (e: any): void => {
    const value = e.target.value;
    setMessage(value);
  };

  const handelOnKeyDown = (e: any) => {
    if (e.key === "Enter") {
      console.log(message);
      if (message === "") {
        return;
      } else {
        client.send(
          JSON.stringify({
            action: "chat",
            data: JSON.stringify({
              message: message,
              name: userName.firstName + " " + userName.firstName[0],
            }),
          })
        );
        messageBox();
        setMessage("");
      }
    }
  };
  const messageBox = () => {
    return <div>{message}</div>;
  };

  useEffect(() => {
    if (location.pathname === "/welcome" || location.pathname === "/waiting") {
      setOpenChat(openChat === false ? true : false);
    }
  }, []);
  const handelOpenChat = () => {
    setOpenChat(openChat === true ? false : true);
  };

  return (
    <div className="chat-app">
      <input
        checked={openChat}
        type="checkbox"
        className="chat-app__checkbox"
        id="chat-toggle"
        onChange={handelOpenChat}
      />
      <label htmlFor="chat-toggle" className="chat-app__icon">
        <Chat className="icon" />
      </label>
      <div className="chat-app__input-content">
        <input
          className="chat-app__text-input"
          type="text"
          value={message}
          placeholder="Comment"
          onChange={handleChange}
          onKeyDown={handelOnKeyDown}
          name="message"
          ref={messageInput}
        />
        <div className="chat-app__input-content--point-group">
          <span>&nbsp;</span>
        </div>
      </div>
      <div className="chat-app__background">&nbsp;</div>
      <div className="chat-app__content">
        <div className="chat-app__messages-box">
          {chat.chatHistory.map((message: any, index: number) => {
            if (!message) {
              return;
            }
            return (
              <Message key={index} message={message} userName={userName} />
            );
          })}
          <div
            ref={messagesEndRef}
            style={{ float: "left", clear: "both" }}
          ></div>
        </div>

        <div className="chat-app__icons-box">
          <span
            className="chat-app__icons-box__item"
            role="img"
            aria-label="Waving Hand"
            onClick={handelAddEmoj}
          >
            👋
          </span>
          <span
            className="chat-app__icons-box__item"
            role="img"
            aria-label=" Red Heart"
            onClick={handelAddEmoj}
          >
            ❤️
          </span>
          <span
            className="chat-app__icons-box__item"
            role="img"
            aria-label="Fire"
            onClick={handelAddEmoj}
          >
            🔥
          </span>
          <span
            className="chat-app__icons-box__item"
            role="img"
            aria-label="Star"
            onClick={handelAddEmoj}
          >
            ⭐
          </span>
          <span
            className="chat-app__icons-box__item"
            role="img"
            aria-label="Smiling Face with Heart-Eyes"
            onClick={handelAddEmoj}
          >
            😍
          </span>
          <span className="chat-app__icons-box__item" onClick={handelAddEmoj}>
            Hello!
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
