import React, { Component } from 'react';

import ApiService from '../services/ApiService';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cpf: '',
            profissao: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    saveUser(e) {
        e.preventDefault();
        let user = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            profissao: this.state.profissao
        };
        ApiService.addUser(user)
            .then(res => {
                this.setState({ message: 'User added successfully.' });
                this.props.history.push('/list-users');
            });
    }

    onChange(e) { this.setState({ [e.target.name]: e.target.value }); }

    render() {
        return (
            <div>
                <h2 className="text-center">Adicionar Usuário</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input id="nome" name="nome" type="text" placeholder="Nome" className="form-control" value={this.state.nome} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpf">CPF:</label>
                        <input id="cpf" name="cpf" type="text" placeholder="cpf" className="form-control" value={this.state.cpf} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="profissao">Profissão:</label>
                        <input id="profissao" name="profissao" placeholder="Profissão" className="form-control" value={this.state.profissao} onChange={this.onChange} />
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;