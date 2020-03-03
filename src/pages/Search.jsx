import React from 'react';
import { Layout, ArticleList } from '../components';
import { articles } from '../data';

const Search = (props) => {
  const argument = props.match.params.argument;

  const selectedArticles = articles.filter((article) => 
  article.title.toLowerCase().includes(argument) ||
  article.text.toLowerCase().includes(argument)
  );

return (
  <Layout>
    <h1>Recherche</h1>
    <h2>Articles comportant le mot : {argument}</h2>
    <ArticleList articles={selectedArticles} />
  </Layout>
);
}

export default Search;