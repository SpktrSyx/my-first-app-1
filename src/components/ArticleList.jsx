import React from 'react';
import { ArticlePreview } from '.';
import { PropTypes, exact } from 'prop-types';

const ArticleList = (props) =>
  <section className="card-list">
    {props.articles.map( (item, index) =>
      <ArticlePreview
        key={`article-preview${index}`}
        title={item.title}
        text={item.text}
      />
    )}
  </section>
;

ArticleList.propTypes = exact({
  articles: PropTypes.array.isRequired,
});

export default ArticleList;
