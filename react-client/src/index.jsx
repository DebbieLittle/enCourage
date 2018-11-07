import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Verify from './components/Verify.jsx';
import MessageBox from './components/MessageBox.jsx';
import axios from 'axios';
import {Modal} from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: []
    
    }
    this.login = this.login.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  login(username, password){
    axios.post('/pwVerification', {
        username: username,
        password: password
    })
    .then((res) => {
      this.setState({
        messages: res.data.map(message => message.messages)
      })
    })
    .catch((err) => {
      alert('Username and/or password was incorrect. Please try again.')
    })
  }

  handleClose() {
    this.setState({ loggedin: false });
  }

  handleShow() {
    this.setState({ loggedin: true });
  }

  render () {
    return (<div>
      <MessageBox/>
      <Verify login={this.login.bind(this)} />
      <h4 className="text-center"> enCOURAGEments </h4>
      <List messages={this.state.messages}/>
      <br/>
      <h4 className="text-center">Don't forget to spread the love you receive!</h4>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));