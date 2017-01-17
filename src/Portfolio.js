import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to='/'><i style={{position: 'absolute', top: '2rem', left: '2rem', color: 'white'}} className="fa fa-chevron-left"></i></Link>
          <h2>{'{Portfolio}'}</h2>
        </div>
        <div className="portfolio">
          <div className="proj">
            <a className='project' href='https://andrewslentz.github.io/random-word-bookfinder/'><p>WordMe</p><i className="smaller fa fa-arrow-right"></i></a>
            <p className='description'>A web app that finds the definition and google book results for a randomly generated word or word of your choice. Uses jQuery, the google books API and the wordnik API.</p>
          </div>
          <div className="proj">
            <a className='project' href='https://andrewslentz.github.io/todo-list/'><p>Todo List</p><i className="smaller fa fa-arrow-right"></i></a>
            <p className='description'>A todo list application programmed in JavaScript and styled like a legal pad.</p>
          </div>
          <div className="proj">
            <a className='project' href='https://vita-restaurants.github.io/vita-site/'><p>Club Vita</p><i className="smaller fa fa-arrow-right"></i></a>
            <p className='description'>A website for a ficticious nightclub using HTML/CSS.</p>
          </div>
          <div className="proj">
            <a className='project' href='https://andrewslentz.github.io/bootstrap-proj/'><p>Visit Alaska</p><i className="smaller fa fa-arrow-right"></i></a>
            <p className='description'>My first website! A travel site for alaska made with bootstrap.</p>
          </div>
        </div>
        <div style={{margin: '2rem auto', color: '#FFEEB9'}} className='contact'>952-913-1436<br/>Andrew.S.Lentz@gmail.com</div>
      </div>
    );
  }
}
