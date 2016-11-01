import React from 'react'
import { authLogin } from '../actions/index'; 
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, Glyphicon, Modal } from 'react-bootstrap';

import NewPost from './newpost';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    
    this.close=this.close.bind(this);
    this.open=this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    console.log('open');
    this.setState({ showModal: true });
  }
  
  render() {
    return (
        <div>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    

      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    <Nav>
      <NavItem eventKey={1} href="#" >
        <FacebookLogin
          appId="1588756591429680"
          autoLoad={true}
          fields="name,email,picture"
          scope='public_profile,email'
          callback={this.props.authLogin}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
          language='ko_KR'
        />
      </NavItem>
      <NavItem eventKey={2} onClick={this.open} > <Glyphicon glyph="pencil" /> </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  
  <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <NewPost></NewPost>
            </Modal.Body>
  </Modal>

  </div>
    );
  }

}

export default connect(null, { authLogin })(Header);