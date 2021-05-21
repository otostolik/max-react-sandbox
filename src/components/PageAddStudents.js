import React from 'react';
import { withRouter } from 'react-router';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class PageAddStudents extends React.Component {
    state = {
        newStudentName: "",
        newStudentSurname: "",
        newStudentUniversity: "",
    };

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    addNewStudent = () => {
        const newStudent = {
            name: this.state.newStudentName,
            surname: this.state.newStudentSurname,
            university: this.state.newStudentUniversity,
        };

        this.props.addNewStudentHandler(newStudent);
        this.props.history.push('/');
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={this.state.newStudentName}
                        onChange={e =>
                            this.setState({ newStudentName: e.target.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="surname">Surname</Label>
                    <Input
                        type="text"
                        id="surname"
                        placeholder="Surname"
                        value={this.state.newStudentSurname}
                        onChange={e =>
                            this.setState({ newStudentSurname: e.target.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="university">University</Label>
                    <Input
                        type="text"
                        id="university"
                        placeholder="University"
                        value={this.state.newStudentUniversity}
                        onChange={e =>
                            this.setState({ newStudentUniversity: e.target.value })
                        }
                    />
                </FormGroup>
                <Button color="success" style={{ marginTop: "10px" }} onClick={this.addNewStudent}>Add</Button>
            </Form>
        );
    }
}

export default withRouter(PageAddStudents);