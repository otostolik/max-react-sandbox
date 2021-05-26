import React from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { Nav, NavItem, Container } from 'reactstrap';

import StudentListPage from './pages/StudentListPage';
import AddStudentPage from './pages/AddStudentPage';
import LiveLocationPage from './pages/LiveLocationPage';

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
        this.setState({ students: this.state.students });
    }

    render() {
        return (
            <Router>
                <Container>
                    <Nav>
                        <NavItem>
                            <NavLink to="/">Students List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/add-student">Add Student</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/current-position">Current Position</NavLink>
                        </NavItem>
                    </Nav>
                    <Switch>
                        <Route path="/current-position">
                            <LiveLocationPage />
                        </Route>
                        <Route path="/add-student">
                            <AddStudentPage handleAddStudent={this.addNewStudent} />
                        </Route>
                        <Route path="/">
                            <StudentListPage student={this.state.students} handleDeleteStudent={this.deleteStudent} />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        );
    }
}

export default App;