import React from 'react';
import Iframe from 'react-iframe';
import * as allActions from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import _ from 'lodash';


function VideoConstructor(props) {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const { videoList, type } = props.props;
  const currentVideo = useSelector((state) => state.video[type][language]);

  const video = (id, title) => {
    return (
      <li key={_.uniqueId()}>
        <div className="course__content-link list-group-item-action" id={id}
                onClick={videoSwitcher}>{title}
        </div>
      </li>
    )
  };

  const dispatch = useDispatch();
  const videoSwitcher = (e) => {
    const { id } = e.target;
    dispatch(allActions.changeCurrentVideo({ newVideo: videoList[language].courses[id], type, language }));
  }

  return (
    <section className="course">
      <div className="container">
        <div className="row pt-4 justify-content-center">
          <div className="course__video col-md-12 pb-4 pr-md-0">
            <Iframe className="course__video-screen" id="screen" url={currentVideo.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""/>
            <div className="course__content">
              <div className="course__content-wrapper">
                <h5 className="course__content-header">{videoList[language].header}</h5>
                <p className="course__content-author">{videoList[language].author}</p>
                <ul className="course__content-list">

                  {(Object.entries(videoList[language].courses)).map(([id, { title }]) => video(id, title))}

                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="row justify-content-center">
          <div className="course__description col-md-12 pb-4 justify-content-center">
            <h5 className="course__description-header" id="title">{currentVideo.title}</h5>
            <hr/>
            <p className="course__description-text" id="description">{currentVideo.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoConstructor;
