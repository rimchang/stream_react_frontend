import React, { Component } from 'react';

import Header from './header';
import UploadsList from './uploads_list';
import EatGram from './photo/eatgram';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        React simple starter
        <UploadsList />
        <EatGram />
      </div>
    );
  }
}
