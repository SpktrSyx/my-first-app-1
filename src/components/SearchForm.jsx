import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class SearchForm extends Component {
  state = {
      search: '',
      redirect: false,
  };

  handleChange = (propName) => (event) => {
  const newValue = event.target.value;
  this.setState({ [propName]: newValue });
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ redirect: true });
    // return <Redirect to={`/search/${search}`}/>;
  }

  render = () => {
    const { search, redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/search/${search}`}/>;
    }

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