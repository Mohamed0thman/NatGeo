import React from "react";

import "./message.styles.scss";

interface messageProps {
  message: { message: string; name: string };
  userName: { firstName: string; lastName: string };
}

const Message: React.FC<messageProps> = (props: messageProps) => {
  const { message, userName } = props;
  return (
    <div className="message">
      <div className="message__name">{message.name}</div>
      <div className="message__message"> {message.message}</div>
    </div>
  );
};

export default Message;
// {`${userName.firstName}  ${userName.lastName[0]} `}