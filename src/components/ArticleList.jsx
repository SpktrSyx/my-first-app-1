import React from 'react';
import { ArticlePreview } from '.';
import { articles } from '../data';

const ArticleList = () =>
  <section className="card-list">
    {articles.map( (item, index) =>
      <ArticlePreview
        key={`article-preview${index}`}
        title={item.title}
        text={item.text}
      />
    )}
  </section>
;

export default ArticleList;
