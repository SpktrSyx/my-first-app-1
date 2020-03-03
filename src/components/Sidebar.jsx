import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { articles, categories } from '../data';

const SidebarSection = (props) =>
  <section>
    <h2>{props.title}</h2>
    <ListGroup>
      {props.items.map( (item, index) =>
        <ListGroup.Item key={`link${index}`}>
          {item}
        </ListGroup.Item>
      )}
    </ListGroup>
  </section>
;

const Sidebar = () =>
  <aside>
    <SidebarSection
      title="Articles"
      items={articles.map( (item) => item.title )}
    />
    <SidebarSection
      title="Catégories"
      items={categories.map( (item) => item.name )}
    />
  </aside>
;

export default Sidebar;
