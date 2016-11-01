import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchUploads } from '../actions/index';

import EatGram from './photo/eatgram';


class UploadsList extends Component {
    renderEatgrams () {
        
        const upload_items = this.props.upload_lists;
        
        return _.map(upload_items,(upload,key) => {
            //console.log('im render eatgram upload',upload);
            return (<li key={key}><EatGram {...upload} /></li>);
        }
            );

    }
    componentWillMount () {
        this.props.fetchUploads();
    }
    
    render () {
        
        return (
            <div>
                hi i'm uploadslist
                <ul className='list-inline'>
                {this.renderEatgrams()}
                </ul>
            </div>
            );
    }
}

function mapStateToProps (state) {
    return {
        upload_lists : state.upload_lists
        };
}

export default connect(mapStateToProps,{ fetchUploads })(UploadsList);