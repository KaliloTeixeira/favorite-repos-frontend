import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { MdDelete, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdAddBox } from 'react-icons/md';

import './styles.css';

export default class Main extends React.Component {
    state = {
        products: [],
        productInfo: [],
        page: 1,
    }

    //Quando o componente for criado
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    }

    async deleteProduct(product) {
        const response = await api.delete(`/products/${product._id}`);
        alert("Excluido com Sucesso!");
        this.loadProducts();
    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }


    // O render fica escutando o state e quando há alguma alteração ele atualiza automaticamente
    render() {
        const { products, page, productInfo } = this.state;

        //A key serve para atribuir um valor unico a cada elemento gerado pelo map
        return (
            <div className="container">
                <div className="product-list" >
                    <div className="add-product-button">
                        <Link to={'/new'} > <MdAddBox /> Novo Repo</Link>
                    </div>

                    {products.map(product => (
                        <article key={product._id} >
                            <strong> {product.title} </strong>
                            <button className="delete-icon" value={product._id} onClick={() => this.deleteProduct(product)} > <MdDelete /> </button>
                            <p> {product.description} </p>
                            <Link to={`/products/${product._id}`} > Acessar </Link>
                        </article>
                    ))}
                    <div className="actions" >
                        <button disabled={page === 1} onClick={this.prevPage} > <MdKeyboardArrowLeft /> </button>
                        <strong> {page} </strong>
                        <button disabled={page === productInfo.pages} onClick={this.nextPage} > <MdKeyboardArrowRight /> </button>
                    </div>
                </div>
            </div>
        );
    }

}