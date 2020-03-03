import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

class SearchForm extends Component {
  state = {
      search: ''
  };

  handleChange = (propName) => (event) => {
  const newValue = event.target.value;
  this.setState({ [propName]: newValue });
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render = () => {
    const { search } = this.state;

    return (
      <Form inline onSubmit={this.handleFormSubmit}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" 
          onChange={this.handleChange('search')} value={search}/>
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    )
  }
}


export default SearchForm;