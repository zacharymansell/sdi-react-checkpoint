import React from 'react';
import Message from './Message.js';

const AllMessages = ({emails, handleClick}) => {
  return (
    <div>
      {emails.map((e, i) => {
        return (
          <div>
            <Message
              email={e}
              key={i}
              minimized={true}
              handleClick={handleClick}
            />
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default AllMessages;