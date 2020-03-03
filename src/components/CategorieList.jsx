import React from 'react';
import { ListGroup, NavDropdown } from 'react-bootstrap';
import categories from '../data/categories'
import { Link } from 'react-router-dom';

const CategorieList = () =>
<NavDropdown title="Catégories" id="cat">
    <ListGroup>
      {categories.map( (item, index) =>
        <NavDropdown.Item>
            <Link to={`categories${index}`}>
            {item.name}
            </Link>
        </NavDropdown.Item>
      )}
    </ListGroup>
</NavDropdown>

export default CategorieList;