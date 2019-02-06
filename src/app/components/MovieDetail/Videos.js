import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CONFIG, COLORS } from '@/common';

const VideosContainer = styled.div`
  position: relative;
  margin: 15px auto;
`;

const Video = styled.div`
  display: flex;
  margin: 10px 0;
  border: 1px solid ${COLORS.GREY};
  border-radius: 3px;
`;

const Desc = styled.div`
  margin-left: 15px;
`;

class Videos extends PureComponent {
  render() {
    const { videos } = this.props;
    const RenderVideos = () => {
      if (videos.length) {
        return videos.map(video => 
          <Video key={video.id}>
            <iframe 
              width="400" 
              height="250" 
              src={`${CONFIG.YOUTUBE}/embed/${video.key}?rel=0`} 
              frameBorder="0" 
              allowFullScreen
            ></iframe> 
            <Desc>
              <h3>{video.name}</h3>
            </Desc>
          </Video>
        )
      }

      return <p>No featured videos registered here</p>
    };

    return (
      <VideosContainer>
        <h2>Videos</h2>
        <RenderVideos />    
      </VideosContainer>
    );
  }
}

Videos.propTypes = {
  videos: PropTypes.array,
};

export default Videos;
