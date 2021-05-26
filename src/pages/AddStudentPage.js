import React from 'react';

import AddStudents from '../components/AddStudents';

export default class AddStudentPage extends React.Component {
    render() {
        return <AddStudents handleAddStudent={this.props.handleAddStudent} />
    }
}
