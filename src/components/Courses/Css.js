import React from 'react';
import './courses.scss';
import {videoListCss} from './listOfCssVideos.js'
import VideoConstructor from './VideoConstructor.js';

function Css() {

  const props = { videoList: videoListCss, type: 'css' };

  return (
    <>
      <VideoConstructor props = { props }/>
    </>
  );
}

export default Css;
