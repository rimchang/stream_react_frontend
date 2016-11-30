import React, { Component } from 'react';
import { Row, Col, Button, Input, Image} from 'react-bootstrap';
import { connect } from 'react-redux';


import { fetchMapUrl } from '../actions/index';

class DaumMap extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = { term : "" };
    }
    
    componentWillMount () {
        this.props.fetchMapUrl(this.props.term);
    }
    
    render() {

        return (
            <div>
                <Image src="http://map2.daum.net/map/imageservice?IW=550&IH=350&MX=493508&MY=1126575&CX=493508&CY=1126575&SCALE=2.5&service=open#.png "  width={600} height={450} thumbnail />
            </div>
            );
    }

}



export default connect(null,{ fetchMapUrl })(DaumMap);