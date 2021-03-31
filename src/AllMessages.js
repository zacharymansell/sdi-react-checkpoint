import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message.js';

const AllMessages = ({
  email, emails, handleClick,
}) => (
  <div>
    {emails.map((e) => (
      <div>
        <Message
          email={e}
          key={e.id}
          minimized={e !== email}
          handleClick={handleClick}
        />
        <br />
      </div>
    ))}
  </div>
);

AllMessages.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
  }),
  emails: PropTypes.arrayOf({}),
  handleClick: PropTypes.func.isRequired,
};

AllMessages.defaultProps = { email: {}, emails: [] };

export default AllMessages;
