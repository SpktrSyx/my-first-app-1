import React from 'react';
import { Layout, ArticleList } from '../components';
import { categories, articles } from '../data';
import { NotFoundPage } from '../pages'

const Category = (props) => {
 const id = Number(props.match.params.id);
 const category = categories[id];

    if (!category){
        return <NotFoundPage />;
    }

    const selectedArticles = articles.filter(item =>
        item.categoryId === id
        );

    return (
        <Layout>
        <h1>{category.name}</h1>
        <ArticleList articles={selectedArticles}/>
        </Layout>
    );
}

export default Category;