import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import './styles.css';

export default class AddProduct extends React.Component {
    constructor() {
        super();
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name: '',
        description: '',
        url: ''
    };

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleUrl(event) {
        this.setState({ url: event.target.value });
    }

    async handleSubmit(event) {
        const response = await api.post('/products', {
            title: this.state.name,
            description: this.state.description,
            url: this.state.url
        })

        console.log(response);
        alert(response);
    }

    render() {
        return (
            <div className="add-product-container">
                <div className="add-product">
                    <h1> Adicionar Repo </h1>
                    <form onSubmit={this.handleSubmit} >
                        <label>Nome</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleName} />

                        <label>Descrição</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleDescription} />

                        <label>URL</label>
                        <input type="link" name="url" value={this.state.url} onChange={this.handleUrl} />

                        <input className="submit-button" type="submit" value="Adicionar Repo" />
                    </form>
                </div>
                <div className="arrow-back" >
                    <Link to="/" >
                        <MdArrowBack />
                    </Link>
                </div>

            </div>
        );
    }
};