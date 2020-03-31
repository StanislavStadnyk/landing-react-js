import React from 'react';

import './Video.scss';

const Video = () => {
  return (
    <div className="Video">
      <div className="app-container">
        <div className="VideoResponsiveFrame">
          <iframe
            src="https://player.vimeo.com/video/23237102?color=ffffff&title=0&byline=0&portrait=0"
            width="640"
            height="360"
            allow="autoplay; fullscreen"
            title="Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
