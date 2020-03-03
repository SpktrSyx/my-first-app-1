import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { articles } from '../data';

const Sidebar = () =>
  <aside>
    <ListGroup>
      {articles.map( (item, index) =>
        <ListGroup.Item key={`article-link${index}`}>{item.title}</ListGroup.Item>
      )}
    </ListGroup>
  </aside>
;

export default Sidebar;
