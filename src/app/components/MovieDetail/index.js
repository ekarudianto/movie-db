import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Casts from './Casts';
import Videos from './Videos';

const MovieDetailContainer = styled.div`
  position: relative;
`;

class MovieDetail extends PureComponent {
  render() {
    const { 
      data,
    } = this.props;

    return (
      <MovieDetailContainer>
        <Header data={data} />
        <Casts casts={data.casts.cast} />
        <Videos videos={data.videos.results} />
      </MovieDetailContainer>
    );
  }
}

MovieDetail.propTypes = {
  data: PropTypes.object,
};

export default MovieDetail;
