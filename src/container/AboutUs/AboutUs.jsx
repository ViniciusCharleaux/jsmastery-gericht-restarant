import React from 'react';

import './AboutUs.css';

import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className='p__opensans'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className='p__opensans'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
