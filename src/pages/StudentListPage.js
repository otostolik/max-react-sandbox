import React from 'react';

import StudentsList from '../components/StudentsList';

export default class StudentListPage extends React.Component {
    render() {
        return <StudentsList student={this.props.student} handleDeleteStudent={this.props.handleDeleteStudent} />
    }
};