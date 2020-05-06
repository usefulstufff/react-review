import Modal from 'modal';

export default class Student extends React.component {
  state = {
    show = false,
  }

  click = (e, ctx) => {
    e.preventDefault();
    ctx.setState({ show: true });
  }

  delete() {
    fetch(`/api/v1/students/${id}/delete`)
  }

  render() {
    return (
      <div>
        <a onClick={e => click(e, this)} type="button">{fullName}</a>
        <button onClick={this.delete}>{this.props.lang = 'ru' ? 'удалить' : 'delete'}</button>
        <Modal data={this.props.data} open={this.state.show} />
      </div>
    );
  }
};

Student.propTypes = {};
