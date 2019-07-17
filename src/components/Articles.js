import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }

  componentDidMount() {
    fetch('http://my-json-server.typicode.com/mate-academy/literary-blog-2/articles')
      .then(response => response.json())
      .then(articles => this.setState({
        articles
      }));
  }

  render() {
    if (this.state.articles) {
      return this.state.articles.map(article => (
        <article key={article.id}>
          <h2><Link to={`${this.props.match.url}/${article.id}`}>{article.title}</Link></h2>
        </article>
      ));
    } else {
      return "Loading...";
    }
  }
}
