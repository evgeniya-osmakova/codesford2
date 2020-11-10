import React from 'react';
import './About.scss';
import './Main.scss';
import Iframe from 'react-iframe';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

function About() {
  const { t, i18n } = useTranslation();

  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const url = () => {
    switch (currentLanguage) {
      case ('ru'):
        return "https://www.youtube.com/embed/UnINyd6jVqY?iv_load_policy=3&showinfo=0&controls=0"
      case ('en'):
        return "https://www.youtube.com/embed/0g-pZWXpqhw?iv_load_policy=3&amp;showinfo=0&amp;controls=0"
      default:
        throw new Error(`Unknown language: '${currentLanguage}'!`);
    }
  }

  return (
    <section className="about">
      <div className="container">
        <div className="text-center">
          <h2 className="about__header">{t('about.title')}</h2>
        </div>
        <div className="row">
          <div className="about__video col-md-12 justify-content-center pb-4">
            <Iframe className="about__video-screen" id="screen"
                    url={url()}
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
