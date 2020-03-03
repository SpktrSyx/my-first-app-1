import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ContactForm extends Component {
  state = {
    email: '',
    message: '',
  };
  

  handleEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  }

  handleMessageChange = (event) => {
    const message = event.target.value;
    this.setState({ message });
  }
  
  render = () => {
    return (
      <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" 
      onChange={this.handleEmailChange} value={this.state.email}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" 
        onChange={this.handleMessageChange} value={this.state.message}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
    )
  }
}

export default ContactForm;
