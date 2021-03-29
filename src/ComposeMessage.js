import React from 'react'

const ComposeMessage = ({handleSubmit, handleChange, sender, subject, message}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        From:
        <input
          type="text"
          value={sender}
          name="sender"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          name="subject"
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <input
          type="text"
          value={message}
          name="message"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ComposeMessage;