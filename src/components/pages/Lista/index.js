import React, {Component} from 'react';
import api from '../../../server/api'

class Lista extends Component{
    state={
        alunos:[]
    }

    async componentDidMount(){
        const response = await api.get('/listar');
        //console.log(response.data);
        this.setState({ alunos: response.data});
    }

    
    render(){
        const {alunos} = this.state;
        return (
            <div className="wrapper-lista">
                <div className="reg-form-lista">
                    <h1 className="text">Lista</h1>
                </div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Matricula</th>
                                <th>Curso</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>Bairro</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map(aluno => (
                                <tr key = {aluno.id}>
                                    <td>{aluno.id}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.age}</td>
                                    <td>{aluno.register}</td>
                                    <td>{aluno.course}</td>
                                    <td>{aluno.address}</td>
                                    <td>{aluno.city}</td>
                                    <td>{aluno.neighborhood}</td>
                                    <td>{aluno.state}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default Lista;