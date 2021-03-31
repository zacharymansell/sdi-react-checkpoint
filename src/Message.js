import React from 'react';

const Message = ({ email, minimized, handleClick }) => {
  const {
    sender, recipient, subject, message, date,
  } = email;

  const minimizedView = (
    <div
      tabIndex={0}
      role="textbox"
      onKeyPress={() => handleClick(email)}
      onClick={() => { handleClick(email); }}
    >
      From:
      {' '}
      {sender}
      <br />
      Subject:
      {' '}
      {subject}
    </div>
  );

  const maximizedView = (
    <div
      tabIndex={0}
      role="textbox"
      onKeyPress={handleClick}
      onClick={() => { handleClick(email); }}
    >
      <div>
        Sent by:
        {' '}
        {sender}
      </div>
      <div>
        To:
        {' '}
        {recipient}
      </div>
      <div>
        Date:
        {' '}
        {date}
      </div>
      <div>
        Subject:
        {' '}
        {subject}
      </div>
      <div>
        Message:
        {' '}
        {message}
      </div>
    </div>
  );

  return (
    minimized ? minimizedView : maximizedView
  );
};

export default Message;
