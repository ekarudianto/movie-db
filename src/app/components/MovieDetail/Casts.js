import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CONFIG, COLORS } from '@/common';

const CastsContainer = styled.div`
  position: relative;
  margin: 15px auto;
  border-bottom: 1px solid ${COLORS.GREY};
  padding-bottom: 25px;
`;

const Cast = styled.div`
  display: flex;
  margin: 10px 0;
  border: 1px solid ${COLORS.GREY};
  border-radius: 3px;
`;

const Profile = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 150px;
`;

const Character = styled.div`
  font-weight: bold;
  font-family: Arial;
  font-size: 13px;
  padding: 10px;
`;

class Casts extends PureComponent {
  render() {
    const { casts } = this.props;
    const RenderCasts = () => {
      if (casts.length) {
        return casts.map(cast => 
          <Cast key={cast.id}>
            <Profile src={`${CONFIG.THUMBNAIL_CDN}/${cast.profile_path}`} />
            <Character>
                <p>{cast.name}</p>
                <p>{cast.character}</p>
            </Character>
          </Cast>
        )
      }

      return <p>No featured casts registered here</p>
    };

    return (
      <CastsContainer>
        <h2>Casts</h2>
        <RenderCasts />    
      </CastsContainer>
    );
  }
}

Casts.propTypes = {
  casts: PropTypes.array,
};

export default Casts;
