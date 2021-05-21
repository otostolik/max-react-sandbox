import React from 'react';
import { withRouter } from 'react-router';

import { Table, Button } from 'reactstrap';

class StudentsList extends React.Component {
    deleteStudent = (id) => {
        this.props.onClick(id);
    }

    render () {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>University</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(this.props.student || []).map((student, index) => {
                        return (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.university}</td>
                                <td>
                                    <Button color="danger" size="sm" style={{marginRight: '10px'}}>Edit</Button>
                                    <Button onClick={() => this.deleteStudent(index)} color="danger" size="sm">Delete</Button>
                                </td>
                            </tr>
                        );
                    })} 
                </tbody>
            </Table>
        );
    }
}

export default withRouter(StudentsList);