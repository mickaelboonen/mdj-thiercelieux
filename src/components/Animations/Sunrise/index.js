import React from 'react';

import path from 'src/assets/images/animations/path.svg';
import horizon from 'src/assets/images/animations/horizon.svg';

import './style-copy.scss';
import './style-copy-copy.scss';

const Sunrise = () => (
  <div className="animation">
    <div className="sun" />
    <div className="hill-back" />
    <div className="mountain-back" />
    <div className="mountain">
      <div className="mountain__peak" />
      <div className="mountain__peak2" />
      <div className="mountain__peak3" />
    </div>
    <div className="mountain2" />
    <div className="horizon">
      <img src={horizon} alt="" />
      {/* <div className="horizon--house" />
      <div className="horizon--house2" />
      <div className="horizon--house3" /> */}
    </div>
    <div className="house">
      <div className="house__tower">
        <div className="house__tower-left">
          <div className="house__tower-left-roof" />
        </div>
        <div className="house__tower-right">
          <div className="house__tower-right-roof" />
        </div>
      </div>
      <div className="house__window-top">
        <div className="house__window-pane" />
        <div className="house__window-pane" />
        <div className="house__window-pane" />
        <div className="house__window-pane" />
      </div>
      <div className="house__window-low">
        <div className="house__window-pane" />
        <div className="house__window-pane" />
        <div className="house__window-pane" />
        <div className="house__window-pane" />
      </div>
      <div className="house__door">
        <div className="house__door-frame" />
        <div className="house__door-wood" />
        <div className="house__door-handle" />
      </div>
      <div className="house__tower" />
      <div className="house__tower" />
      <div className="house__tower" />
    </div>
    <img className="path" src={path} alt="" />
  </div>
);

export default Sunrise;
