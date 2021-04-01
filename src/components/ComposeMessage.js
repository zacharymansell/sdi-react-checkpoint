import React from 'react';
import PropTypes from 'prop-types';

const ComposeMessage = ({
  handleSubmit,
  handleChange,
  sender,
  subject,
  message,
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="sender">
      From:
      <input
        type="text"
        value={sender}
        name="sender"
        id="sender"
        onChange={(e) => handleChange(e)}
      />
    </label>
    <br />
    <label htmlFor="subject">
      Subject:
      <input
        type="text"
        value={subject}
        name="subject"
        id="subject"
        onChange={handleChange}
      />
    </label>
    <br />
    <label htmlFor="message">
      Message:
      <input
        id="message"
        type="text"
        value={message}
        name="message"
        onChange={handleChange}
      />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

ComposeMessage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  sender: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ComposeMessage;
