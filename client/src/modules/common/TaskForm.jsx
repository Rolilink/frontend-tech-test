import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button, FormControl, Label } from 'react-bootstrap';


export default class TaskForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    task: PropTypes.any,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    task: {
      title: '',
      description: '',
    },
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onSubmit();
  }

  render() {
    const {
      task,
      onTitleChange,
      onDescriptionChange,
      onCancel,
    } = this.props;

    return (
      <Form onSubmit={e => this.onSubmit(e)} className={`TasksForm ${this.props.className}`}>
        <FormGroup className="TasksForm-Title">
          <Label>Title:</Label>
          <FormControl
            type="text"
            onChange={e => onTitleChange(e.target.value)}
            value={task.title}
            className="TasksForm-TitleInput"
          />
        </FormGroup>
        <FormGroup className="TasksForm-Description">
          <Label>Description:</Label>
          <FormControl
            type="text"
            onChange={e => onDescriptionChange(e.target.value)}
            value={task.description}
            className="TasksForm-DescriptionInput"
          />
        </FormGroup>
        <FormGroup className="TasksForm-Actions">
          <FormControl type="submit" className="btn btn-primary TasksForm-SubmitButton" value="Submit" />
          <Button className="btn btn-primary TasksForm-CancelButton" onClick={() => onCancel()} bsStyle="danger">Cancel</Button>
        </FormGroup>
      </Form>
    );
  }
}
