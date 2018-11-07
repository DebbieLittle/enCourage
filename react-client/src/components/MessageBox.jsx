import React from 'react';
import axios from 'axios';

class MessageBox extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      student: '',
      message: '',
      studentList: []
    };

    this.setStudent = this.setStudent.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.getStudentList = this.getStudentList.bind(this);
  }

  componentDidMount(){
    this.getStudentList();
  }

  setMessage (e) {
    e.preventDefault();
    this.setState({
      message: e.target.value
    })
  }

  setStudent(e) {
    this.setState({
      student: e 
    }, function() {
      if (this.state.student !== 'Select A Student' && this.state.message.length > 0) {
        axios.post('/encouragement', {
          username: this.state.student,
          message: this.state.message
        })
        .then(res => {
          this.setState({message: ''})
        }, alert('Message has been sent!'))
        .catch((err) => {
          console.log('POSTED ERR',err)
        })
      } else {
        alert('Please write some words of enCOURAGEment')
      }
    })
  }

  getStudentList() {
    axios.get('/studentList')
    .then(res => {
      this.setState({
        studentList: res.data
      })
    })
  }


  render () {
    return(
      <div className="text-center">
        <textarea placeholder="Write your enCOURAGEment here & select a student to send your message! :)" rows="6" cols="73" id="message" value={this.state.message} onChange={this.setMessage}></textarea>
        <br/>

        <select onChange={(e) => this.setStudent(e.target.value)}>
        <option>Select A Student</option>
        {this.state.studentList.map((student) => {
          return(
            
            <option value={student.username} key={student.username}>{student.username}</option>
            
          )
        })}
        </select>

      </div>
    )
  }
}

export default MessageBox;