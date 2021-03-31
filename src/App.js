import './App.css';
import React, { Component } from 'react';
import AllMessages from './AllMessages';
import ComposeMessage from './ComposeMessage';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      emails: [],
      email: {},
      sender: '',
      subject: '',
      message: '',
      searchTerm: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchMessages();
  }

  handleClick(e) {
    this.setState((state) => (state.email.message === e.message ? { email: {} } : { email: e }));
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  handleSubmit(event) {
    const { sender, subject, message } = this.state;
    const blankMessage = { sender: '', subject: '', message: '' };
    event.preventDefault();
    const email = {
      recipient: 'jane@galvanize.com',
      sender,
      subject,
      message,
      date: new Date(),
    };

    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then(() => this.fetchMessages())
      .catch((e) => console.error(e))
      .finally(() => this.setState(blankMessage));
  }

  fetchMessages() {
    fetch('http://localhost:3001/emails')
      .then((res) => res.json())
      .then((res) => this.setState({ emails: res }))
      .catch((e) => console.error(e));
  }

  render() {
    const {
      searchTerm,
      emails,
      email,
      sender,
      subject,
      message,
    } = this.state;
    const regex = new RegExp(searchTerm, 'gi');
    const filtered = emails.filter((e) => (
      e.sender.match(regex)
        || e.subject.match(regex)
        || e.message.match(regex)
    ));

    return (
      <div className="App">
        <Search
          searchTerm={searchTerm}
          handleChange={this.handleChange}
        />
        <AllMessages
          email={email}
          emails={filtered}
          handleClick={this.handleClick}
        />
        <ComposeMessage
          sender={sender}
          subject={subject}
          message={message}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
