import React , { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';
import { Image, Media } from 'react-bootstrap';


export default class EatGram extends Component {
    getRelativeTime (timestamp) {
        return (
            Moment(timestamp).fromNow()
            );
    }
    
    render () {
        const username=_.get(this.props,'user_id.userprofile.name');
        console.log('username',username);
        return (
            
             <div className='eatgram-photo'>

                    <Image className='image' src={this.props.image_file}  rounded width={310} />

             <Media bsClass='user-profile'>
                 <Media.Left>
                     <Image bsClass='media-object' src={_.get(this.props,'user_id.userprofile.profile_photo')} width={50} height={40} />
                 </Media.Left>
                 <Media.Body>
                     <Media.Heading><strong>{_.get(this.props,'user_id.userprofile.name')}</strong></Media.Heading>
                     <p>{this.props.caption}</p>
                     <ul className="photo-meta list-inline">
 						<li><span className="glyphicon glyphicon-time"></span>{ this.getRelativeTime(this.props.created_at) }</li>
 						<li><span className="glyphicon glyphicon-heart"></span> likes</li>
 						<li><span className="glyphicon glyphicon-map-marker"></span> dsad</li>
                     </ul>
                 </Media.Body>
             </Media>
             //comment
             </div>
            
            );
    } 
}