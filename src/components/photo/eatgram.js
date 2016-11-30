import React , { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';
import { Card, Icon, Image, List, Comment } from 'semantic-ui-react'


export default class EatGram extends Component {
    getRelativeTime (timestamp) {
        return (
            Moment(timestamp).fromNow()
            );
    }
    
    render () {
        const username=_.get(this.props,'user_id.userprofile.name');
        return (
            
             <div className='eatgram-photo'>

                <Card>
                    <Image src={this.props.image_file} />
                    <Card.Content>
                      <Card.Header>
                        <Image src={_.get(this.props,'user_id.userprofile.profile_photo')} size="big" avatar bordered />
                        <span>{_.get(this.props,'user_id.userprofile.name')}</span>
                      </Card.Header>
                      <Card.Meta>
                     <List horizontal floated='right'>
 						<List.Item>
 						<span className="glyphicon glyphicon-time"></span>{ this.getRelativeTime(this.props.created_at) }
 						</List.Item>
 						<List.Item>
 						<span className="glyphicon glyphicon-heart"></span> likes
 						</List.Item>
 						<List.Item>
 						<span className="glyphicon glyphicon-map-marker"></span> dsad
 						</List.Item>
                     </List>
                      </Card.Meta>
                      <Card.Description>
                        <p>{this.props.caption}</p>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/stevie.jpg' />
      <Comment.Content>
        <Comment.Author>Stevie Feliciano</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
          <div>
            <Icon name='star' />
            5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
          Hey guys, I hope this example comment is helping you read this documentation.
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
                    </Card.Content>
                  </Card>

             </div>
            
            );
    } 
}