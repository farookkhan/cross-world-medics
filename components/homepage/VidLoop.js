import { Component } from 'react';

class VidLoop extends Component {
  render() {
    return (
      <div>
        <div className="overlay">
          <video
            playsInline
            autoPlay
            muted
            loop
            poster="https://s3.amazonaws.com/health-corps-international/CWM-poster-720-medium-v1.png"
            id="bgvid">
            <source src="https://s3.amazonaws.com/health-corps-international/CWM-loop-720-medium-v2.webm" type="video/webm" />
            <source src="https://s3.amazonaws.com/health-corps-international/CWM-loop-720-medium-v2.mp4" type="video/mp4" />
          </video>
          <div className="mobile-homepage" />
        </div>       
        <style jsx>{`
          #bgvid {
            position: fixed;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -100;
            -ms-transform: translateX(-50%) translateY(-50%);
            -moz-transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
            background: url(https://s3.amazonaws.com/health-corps-international/CWM-poster-720-medium-v1.png) no-repeat;
            background-size: cover; 
          }

          .overlay {
            width: 100%;
            height: 100vh;
            
          }

          .mobile-homepage {
            display: none;
          }

          @media (max-width: 768px) {
            #bgvid {
              display: none;
            }

            .mobile-homepage {
              display: block;
              background-image: url('https://s3.amazonaws.com/health-corps-international/CWM-poster-720-medium-v1.png');
              background-size: cover;
              background-position: center;
              height: 100vh;
            }
            
          }
        `}</style>
      </div>
    );
  }
}

export default VidLoop;
