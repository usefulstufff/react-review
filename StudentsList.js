import React from 'react';
import Student from './Student';

const Student = styled.div`
  background-color: gray;
`;

export default class StudentList extends React.component {
  click() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return StudentList.map((s, i) => (
      <Student key={i} onClick={click} data={s} fullName={s.fullName} lang={this.props.lang} />
    ))
  }
}

Student.propTypes = {};
