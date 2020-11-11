import React from 'react';
import './courses.scss';
import VideoConstructor from './VideoConstructor.js';
import {videoListHtml} from './listOfHtmlVideos.js';

function Html() {

  const props = { videoList: videoListHtml, type: 'html' };

  return (
    <>
      <VideoConstructor props = { props }/>
    </>
  );
}

export default Html;
