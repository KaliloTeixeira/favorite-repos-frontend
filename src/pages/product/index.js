import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { MdArrowBack } from 'react-icons/md';

import './styles.css';

export default class Product extends React.Component {
    state = {
        product: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info" >
                <div className="product-info-product">
                    <h1>{product.title} </h1>
                    <p> {product.description} </p>
                    <p>
                        URL: <a href={product.url} > {product.url} </a>
                    </p>
                </div>

                <div className="arrow-back" >
                    <Link to="/" >
                        <MdArrowBack />
                    </Link>
                </div>
            </div >
        );
    }
}