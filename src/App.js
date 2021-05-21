import React from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Nav, NavItem, NavLink, Container } from 'reactstrap';

import StudentsList from './components/StudentsList';
import PageAddStudents from './components/PageAddStudents';

class App extends React.Component {
    state = {
        students: null
    }

    async componentDidMount() {
        const response = await axios.get('https://my-json-server.typicode.com/Max-jun-source/students-list/Students');

        this.setState({ students: response.data });
    }

    addNewStudent = (student) => {
        this.setState({ students: [...this.state.students, student] });

    }

    deleteStudent = (id) => {
        this.state.students.splice(id, 1);
    }

    render() {
        return (
            <Router>
                <Container>
                    <Nav>
                        <NavItem>
                            <Link to="/">Students List</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/add-student">Add Student</Link>
                        </NavItem>
                    </Nav>
                    <Switch>
                        <Route path="/add-student">
                            <PageAddStudents onClick={this.addNewStudent} />
                        </Route>
                        <Route path="/">
                            <StudentsList student={this.state.students} onClick={this.deleteStudent} />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        );
    }
}

export default App;