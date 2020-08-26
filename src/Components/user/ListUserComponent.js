import React, { Component } from 'react'
import ApiService from "../services/ApiService";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.findUsers()
            .then((res) => {
                this.setState({ users: res.data })
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
            .then(res => {
                this.setState({ message: 'User deleted successfully.' });
                this.setState({ users: this.state.users.filter(user => user.id !== userId) });
            })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="text-center">Lista Usuários</h2>
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={() => this.addUser()}>
                        <AddIcon />
                    </Button>
                </div>
                <div>
                    <MaUTable>
                        <TableHead>
                            <TableRow>
                                <TableCell className="hidden">Código</TableCell>
                                <TableCell align="center">Nome</TableCell>
                                <TableCell align="center">CPF</TableCell>
                                <TableCell align="center">Profissão</TableCell>
                                <TableCell align="center">Acão</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.users.map(
                                    user => 
                                        <TableRow key={user.id}>
                                            <TableCell align="center">{user.id}</TableCell>
                                            <TableCell align="center">{user.nome}</TableCell>
                                            <TableCell align="center">{user.cpf}</TableCell>
                                            <TableCell align="center">{user.profissao}</TableCell>
                                            <TableCell align="center">
                                                <Button variant="contained" className="btn-primary-spacing" color="primary" onClick={() => this.deleteUser(user.id)}>
                                                    <DeleteIcon />
                                                </Button>
                                                <Button className="btn-space" variant="contained" color="secondary" onClick={() => this.editUser(user.id)}>
                                                    <EditIcon />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                )
                            }
                        </TableBody>
                    </MaUTable>
                </div>
            </div>
        )
    }
}

export default ListUserComponent;