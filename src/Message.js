import React from 'react';

const Message = ({email, minimized, handleClick}) => {
  const {sender, recipient, subject, message, date} = email;

  const minimizedView =
    <div onClick={(e) => {handleClick(email)}}>
      From: {sender}
      <br />
      Subject: {subject}
    </div>

  const maximizedView =
    <div>
      <div>
        Sent by: {sender}
      </div>
      <div>
        To: {recipient}
      </div>
      <div>
        Date: {date}
      </div>
      <div>
        Subject: {subject}
      </div>
      <div>
        Message: {message}
      </div>
    </div>

  return (
    minimized ? minimizedView : maximizedView
  )
}

export default Message;