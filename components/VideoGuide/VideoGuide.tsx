import React from 'react';
import { VideoGuideStyle, VideoWrapper } from './VideoGuide.style';
import { Container } from 'styles/Foundations';

const VideoGuide = () => {
  return (
    <VideoGuideStyle>
      <Container>
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/EC2j2sudxOc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      </Container>
    </VideoGuideStyle>
  );
};

export default VideoGuide;
