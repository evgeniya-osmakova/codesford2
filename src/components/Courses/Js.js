import React from 'react';
import './courses.scss';
import {videoListJs} from './listOfJsVideos.js';
import VideoConstructor from './VideoConstructor.js';

function Js() {

  const props = { videoList: videoListJs, type: 'js' };

  return (
    <>
      <VideoConstructor props = { props }/>
    </>
  );
}

export default Js;
