import React from 'react';
import './About.scss';
import Iframe from 'react-iframe';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="text-center">
          <h2 className="about__header">About project</h2>
        </div>
        <div className="row">
          <div className="about__video col-md-12 justify-content-center pb-4">
            <Iframe className="about__video-screen" id="screen"
                    url="https://www.youtube.com/embed/0g-pZWXpqhw?iv_load_policy=3&amp;showinfo=0&amp;controls=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
