import React from 'react';
import { Layout, ArticleList } from '../components';
import { articles } from '../data';

const Results = () =>
  <Layout>
    <h1>Résultats de la recherche</h1>
    <ArticleList articles={articles} />
  </Layout>
;

export default Results;