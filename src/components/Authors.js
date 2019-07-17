import React, { Component } from 'react';

export default class Authors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: null
    };
  }

  componentDidMount() {
    fetch('http://my-json-server.typicode.com/mate-academy/literary-blog-2/authors')
      .then(response => response.json())
      .then(authors => this.setState({
        authors
      }));
  }

  render() {
    console.log(this.state.authors);
    if (this.state.authors) {
      return this.state.authors.map(author => (
        <div key={author.id}>{author.name}</div>
      ));
    } else {
      return "Loading...";
    }
  }
}
