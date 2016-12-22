import React, {Component} from 'react';
import logo from './logo.png'
import {Link} from 'react-router';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h2>{'{Page not found}'}</h2>
          <Link to='/'><i style={{position: 'absolute', top: '2rem', left: '2rem', color: 'white'}} className="fa fa-chevron-left"></i></Link>
          <img style={{marginTop: '5rem'}} src={logo} alt='monogram' />
        </div>
      </div>
    );
  }
}
