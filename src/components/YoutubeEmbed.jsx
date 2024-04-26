import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='rounded-md'
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
