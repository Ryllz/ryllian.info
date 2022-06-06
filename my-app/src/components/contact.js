import React, { Component } from 'react';

class Contact extends Component {

      render() {
        return(
          <div className="App">
              <h1>WIP!</h1>
          </div>
        );
      }
    
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(event) {
      }
        
}

export default Contact;