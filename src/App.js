import './App.css';
import {Component} from 'react'
import AllMessages from './AllMessages'
import Message from './Message'
import ComposeMessage from './ComposeMessage';
import Search from './Search';

class App extends Component {
  constructor() {
    super()
    this.state = {
      emails: [],
      email: {},
      sender: '',
      subject: '',
      message: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages() {
    fetch('http://localhost:3001/emails')
      .then((res) => res.json())
      .then(res => this.setState({emails: res}))
  }

  handleClick(email) {
    this.setState({email}, () => console.log(this.state.email))
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log(name,value)

    this.setState(state => {
      return {
        [name]: value
      }
    }, () => console.log(this.state[name]))
  }

  handleSubmit(event) {
    const {sender, subject, message} = this.state;
    event.preventDefault();
    const email = {
      recipient: 'jane@galvanize.com',
      sender,
      subject,
      message,
      date: new Date(),
    }

    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
      .then(res => res.json())
      .then(() => this.fetchMessages())
  }

  render() {
    const {emails, email, sender, subject, message} = this.state;
    return (
      <div className="App">
        <Search />
        <AllMessages emails={emails} handleClick={this.handleClick}/>
        <Message email={email} />
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
