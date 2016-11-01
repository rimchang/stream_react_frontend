import React, { Component } from 'react';
import { FormGroup, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class NewPost extends Component {
  
  render() {
    return(
      <form>
        <input type="text" className="form-control" {...title} />
        <FieldGroup
          id="formControlsFile"
          type="file"
          label="file"
          placeholder="Example block-level help text here"
        />
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
      );
  }
}

export default NewPost;