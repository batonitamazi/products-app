import React, { Component } from 'react'
import Product from './Product';
import products from '../seed';

export default class ProductList extends Component {
    
    render() {
        const prod = products.sort((a, b) => (
             b.votes - a.votes
        ));
        const productComponents = prod.map((product) =>
            ( 
                <Product
                    key={'product - ' + product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
        ));
        return(
            productComponents
        );
    }
}