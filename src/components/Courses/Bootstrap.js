import React from 'react';
import './courses.scss';
import {videoListBootstrap} from './listOfBootstrapVideos.js';
import VideoConstructor from './VideoConstructor.js';

function Bootstrap() {
  const props = { videoList: videoListBootstrap, type: 'bt' };

  return (
    <>
      <VideoConstructor props = { props }/>
    </>
  );
}

export default Bootstrap;
