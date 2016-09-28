import React , { Component } from 'react';
import Moment from 'moment';
import { Image, Media } from 'react-bootstrap';


export default class EatGram extends Component {
    getRelativeTime (timestamp) {
        return (
            Moment(timestamp).fromNow()
            );
    }
    
    render () {
        return (
            <div>
                <div className='eatgram-photo'>
                    <Image src={this.props.image_file}  rounded  width={500} height={400} />
                </div>
                
                <Media bsClass='user-profile'>
                    <Media.Left>
                        <Image bsClass='media-object' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrpQblJWOm9ymX7-ob8w_VIJ4pPZi__k2MFRcLRRfxBd30NeLoQ' width={30} height={30} />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>유저네임</Media.Heading>
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