import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUploads } from '../actions/index';
import EatGram from './photo/eatgram';

class UploadsList extends Component {
    renderEatgrams () {
        return this.props.upload_lists.map((upload) => {
            return (<EatGram key={upload.id} {...upload} />);
        });
    }
    componentWillMount () {
        this.props.fetchUploads();
    }
    
    render () {
        return (
            <div>
                hi i'm uploadslist
                {this.renderEatgrams()}
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