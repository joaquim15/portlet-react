import React, { Component } from 'react'
import ApiService from "../services/ApiService";

class EditUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            cpf: '',
            profissao: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.findUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    nome: user.nome,
                    cpf: user.cpf,
                    profissao: user.profissao
                })
            });
    }

    onChange(e) { this.setState({ [e.target.name]: e.target.value }); }

    saveUser(e) {
        e.preventDefault();
        let user = { id: this.state.id, nome: this.state.nome, cpf: this.state.cpf, profissao: this.state.profissao };
        ApiService.editUser(user)
            .then(res => {
                this.setState({ message: 'User added successfully.' });
                this.props.history.push('/list-users');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Editar Usuário</h2>
                <form>

                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" placeholder="Nome" name="nome" className="form-control" readonly="true" defaultValue={this.state.nome} />
                    </div>

                    <div className="form-group">
                        <label>CPF:</label>
                        <input placeholder="CPF" name="cpf" className="form-control" value={this.state.cpf} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Profissão:</label>
                        <input placeholder="Profissão" name="profissao" className="form-control" value={this.state.profissao} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;