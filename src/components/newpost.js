import React, { Component } from 'react';
import { FormGroup, FormControl, Button, ControlLabel, HelpBlock, Thumbnail, Glyphicon } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import { FieldFormControl, LocationFieldFormControl }  from './fieldFormComponent';




class NewPost extends Component {
  
   constructor(props) {
      super(props);
      
      this.state = {
        preview : 'https://d1p42fqrbwqdsw.cloudfront.net/campaigns/background_images/000/007/192/web/N_logo_thunderclap.png?1386029425',
        term : ""
      };
      
      this.imageChange = this.imageChange.bind(this);
      this.locationChange = this.locationChange.bind(this);
   }
   
  imageChange(e) {
      console.log('hi im imagechange event',e);
      this.setState({ preview : URL.createObjectURL(e.target.files[0]) });
  }
  
  locationChange(e) {
    console.log("hi im locationchange callback",e.target.value);
    this.setState({term : e.target.value});
  }
  
  onSubmit (props) {
    console.log("i'm on submit",props);
  }
  
  onClickButton(event) {
    console.log('hi im onclick button');
  }
  
  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Thumbnail src={this.state.preview} alt="242x200" />
        <Field 
          type="file" 
          name="formControlsFile" 
          placeholder="Please input image file" 
          component={FieldFormControl} 
          onChangeAction={this.imageChange}
          />
        
        <Field type="text" 
          name="formControlsLocation" 
          placeholder="please input location" 
          value={this.state.term} 
          component={LocationFieldFormControl} 
          onChange={this.locationChange} 
          onClickButton={this.onClickButton}
          />
        
        <Field 
          type="textarea" 
          name="formControlsTextarea" 
          placeholder="please input description" 
          component={FieldFormControl} 
          componentClass="textarea" 
          />
        <Button type="submit">
          Submit
        </Button>
      </form>
      );
  }
}

export default reduxForm({
  form: 'newpost'
})(NewPost);