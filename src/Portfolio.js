import React, {Component} from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h2>{'{Portfolio}'}</h2>
        </div>
        <div className="portfolio">
          <a className='project' href='https://bimini.herokuapp.com/'>Bimini <i className="fa fa-arrow-right"></i></a>
        </div>
      </div>
    );
  }
}
