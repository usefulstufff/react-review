import React from 'react';
import StudentList from './StudentsList';

export default class StudentPage extends React.component {
  state = {
    data: null,
  }

  componentDidMount() {
    fetch('/api/v1/students')
      .then(r => r.json())
      .then(r => {
        r.forEach((v, i) => {
          v.fullName = v.first_name + v.last_name;
          v.id = i;
        });
        this.setState({ data: r });
      });
  }

  render() {
    const condition = this.state.data;

    if (condition) {
      return (
        <StudentList data={data} lang={this.props.lang} />
      );
    }
    <Preloader />
  }
}
