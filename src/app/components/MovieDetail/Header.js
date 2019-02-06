import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CONFIG, COLORS } from '@/common';
import Tags from './Tags';

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${COLORS.GREY};
  padding-bottom: 25px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: block;
    filter: opacity(0) grayscale(100%) contrast(130%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    will-change: opacity;
    transition: filter 1s;
    background-color:${props => (props.backdrop ? 'transparent' : '#333')};
    background-image: ${props => `url(${CONFIG.BACKDROP_CDN}/${props.backdrop})`};
  }
`;

const Overview = styled.p`
  font-size: 12px;
`;

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      crews: [],
    };

    this.getCrews = this.getCrews.bind(this);
  }

  getCrews() {
    const { crew } = this.props.data.casts;
    return crew.map(crew => crew.name);
  }

  render() {
    const { 
      data,
    } = this.props;

    return (
      <HeaderContainer backdrop={data.backdrop_path}>
        <h2>{data.title}</h2>
        <h4>Overview</h4>
        <Overview>{data.overview}</Overview>
        <h4>Featured crew</h4>
        <Tags
          noTagsMessage='No featured crew registered'
          tags={this.getCrews()}
        />
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
