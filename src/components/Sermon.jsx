import React from 'react';
import YouTubeEmbed from './YoutubeEmbed';
import styles, { layout } from '../style';

const Sermon = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className='container mx-auto px-6 py-4'>
            <div className='flex flex-col items-center justify-center mb-5'>
                <span className={`${styles.heading}`}>Get better by hearing our sermons</span>
                <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo, sed eget volutpat, vel enim, aenean. Non dictum lorem euismod quis pharetra sed pellentesque.</p>
            </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5'>
         
            <YouTubeEmbed videoId="0C0KthcyK2U" />
            <div className='flex flex-col gap-2'>
                <YouTubeEmbed videoId="bXlJrGtUg4k" />
                <YouTubeEmbed videoId="tm3y6RI9p9s" />
                <YouTubeEmbed videoId="dUFzn6mNAPk" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sermon;
