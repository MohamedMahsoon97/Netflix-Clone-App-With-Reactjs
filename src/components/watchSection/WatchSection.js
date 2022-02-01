import './WatchSection.scss';

const WatchSection = () => {
      return (
            <div className='watching'>
                  <div className='left'>
                        <h1>Watch everywhere.</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                  </div>
                  <div className='right'>
                        <div className='watch_video'>
                              <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt='' />
                              <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" autoPlay={true} loop />
                        </div>
                  </div>
            </div>
      );
};

export default WatchSection;
