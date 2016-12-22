import React, { Component } from 'react';
import {Link} from 'react-router';
import andrew from './Andrew.png';
import medium from './medium.png';
import twitter from './Twitter.png';
import github from './GitHub.png';
import linkedin from './linkedin.png';
import './Resume.pdf'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{'{Andrew S. Lentz}'}</h2>
          <img className='andrew' src={andrew} alt='me!' />
          <h3>Front End Engineer</h3>
        </div>
        <div className='shadowBox'>Hi, I’m Andrew, and I am a new developer from Minneapolis, MN. I am passionate about creative problem solving involved in implementing new features and designs. I am proficient in JavaScript, including frameworks like React and jQuery, as well as HTML/CSS, and git. All my sites are fully dynamic. I am a quick study and always eager to learn new technologies! I am available for hire or freelance work.</div>
        <div className='navigation'><Link to='/portfolio'><p>Portfolio</p></Link><a href='./Resume.pdf'><p>Resume</p></a></div>
        <div className='contact'><p className='margin'>952-913-1436</p><p>Andrew.S.Lentz@gmail.com</p></div>
        <div className='socials'>
          <a href='https://github.com/AndrewSLentz'><img className='socials' src={github} alt='github' /></a>
          <a href='https://www.linkedin.com/in/andrew-s-lentz-03931799'><img className='socials' src={linkedin} alt='linkedin' /></a>
          <a href='https://medium.com/@andrew.s.lentz'><img className='medium' src={medium} alt='medium' /></a>
          <a href='https://twitter.com/AndrewSLentz'><img className='socials' src={twitter} alt='twitter' /></a>
        </div>
      </div>
    );
  }
}

export default App;
