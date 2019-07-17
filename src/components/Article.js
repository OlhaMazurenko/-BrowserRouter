import React, { Component } from 'react';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://my-json-server.typicode.com/mate-academy/literary-blog-2/articles/${id}`)
      .then(response => response.json())
      .then(article => this.setState({
        article
      }));
  }

  render() {
    console.log(this.props);
    if (this.state.article) {
      return  (
        <article>
          <h2>{this.state.article.title}</h2>
          <div dangerouslySetInnerHTML={{__html:this.state.article.text}} />
        </article>
      );
    } else {
      return "Loading...";
    }
  }
}
