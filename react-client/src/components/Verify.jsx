import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'

class Verify extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      signup: false,
    }
    this.onChangeUser = this.onChangeUser.bind(this)
    this.onChangePw = this.onChangePw.bind(this)
    this.search = this.search.bind(this)
    this.toggleSignup = this.toggleSignup.bind(this)
    this.register = this.register.bind(this)
  }

  onChangeUser(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePw(e) {
    this.setState({
      password: e.target.value
    });
  }


  search() {
    this.props.login(this.state.username, this.state.password)
    this.setState({
      username: '',
      password: ''
    })
  }

  toggleSignup(){
    this.setState({
      signup: true
    })
  }

  register() {
    if (this.state.username.length>1) {
      axios.post('/register', {
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        alert('Successfully registered.')
        this.setState({
          username: '',
          password: '',
          signup: false
        })
      })
      .catch(() => {
        alert('Username is taken. Please select different username.')
      })
    }
  }

  render() {
    if (!this.state.signup) {
      return(
        <div className="text-center">
          <br/>
          <h3>Get enCOURAGEd!</h3>
          <p>Login to retrieve your messages. Your encouragements will still be anonymous</p>
          First Name: <input value={this.state.username} onChange={this.onChangeUser}/> Password: <input type="password" value={this.state.password} onChange={this.onChangePw}/>
          <Button bsSize="small" onClick={this.search}> Login </Button>
          <br/>
          <a href="#" onClick={this.toggleSignup}>Click Here to Sign Up</a>
          <br/><br/>
        </div>
      )
    } else {
      return(
        <div className="text-center">
        <br/>
          Select Username: <input value={this.state.username} onChange={this.onChangeUser}/> Password: <input type="password" value={this.state.password} onChange={this.onChangePw}/>    
          <p>(Please set username as your first name & first initial of last name. No spaces)</p>
          <Button onClick={this.register}> Sign Up </Button>
          <br/><br/>
        </div>
      )
    }
  }
}

export default Verify;