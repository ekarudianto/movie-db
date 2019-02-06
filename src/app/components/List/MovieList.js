import axios from 'axios';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CONFIG, COLORS } from '@/common';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';
import NotFound from '../NotFound';
import Modal from '../Modal';
import MovieDetail from '../MovieDetail';

const MovieListContainer = styled.div`
  position: relative;

  &.fetching::after {
    background: ${COLORS.GREY};
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
`;

const Poster = styled.img`
  min-width: 185px;
`;

const Movie = styled.div`
  border: 1px solid ${COLORS.GREY};
  border-radius: 0 5px 5px 0;
  margin: 15px 0;
  display: flex;
  flex-flow: row wrap;

  &:hover {
    cursor: pointer;
    color: ${COLORS.LIGHT_BLUE};
  }
`;

const Description = styled.div`
  position: relative;
  padding: 0 10px;
  flex: 1;
`;

const Title = styled.h4`
  margin: 10px 0;
`;

const Plot = styled.div`
  margin: 15px 0;
  font-size: 12px;
`;

const Release = styled.div`
  font-size: 14px;
`;

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clickedMovie: {},
      isDisplayDetail: false,
      isFetchingDetailData: false,
    }

    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async changeCurrentPage(numPage) {
    const { updatePagination, updateList, search } = this.props;
    const req = await axios.get(`
      ${CONFIG.API_URL}/search/movie?api_key=${CONFIG.API_KEY}&language=en-US&query=${search}&page=${numPage}&include_adult=true
    `);

    updateList(req.data);
    return updatePagination(numPage);
  }

  async handleClick(id) {
    this.setState({isFetchingDetailData: true});

    const movie = await axios.get(`${CONFIG.API_URL}/movie/${id}?api_key=${CONFIG.API_KEY}&append_to_response=videos,reviews,casts`);

    this.setState({ clickedMovie: movie.data });
    this.setState({ isFetchingDetailData: false });
    this.setState({ isDisplayDetail: true });
  }

  render() {
    const { list, currentPagination } = this.props;
    const { isDisplayDetail, clickedMovie, isFetchingDetailData } = this.state;

    const Render = () => {
      if (list.results && list.results.length > 0) {
        return list.results.map(movie => 
          <Movie key={movie.id} onClick={() => this.handleClick(movie.id)}>
            <Poster src={`${CONFIG.IMAGE_CDN}/${movie.poster_path}`}/>
            <Description>
              <Title>{movie.title}</Title>
              <Release>Release date : {movie.release_date}</Release>
              <Plot>{movie.overview}</Plot>
            </Description>
          </Movie>
        )
      } else if (list.results && list.results.length === 0) {
        return <NotFound />
      }

      return null;
    };

    const RenderPagination = () => {
      if (list.results && list.results.length > 0) {
        return (
          <Pagination
            currentPage={currentPagination}
            totalPages={list.total_pages}
            changeCurrentPage={this.changeCurrentPage}
            theme="bottom-border"
          />
        );
      }

      return null;
    }

    return (
      <MovieListContainer className={isFetchingDetailData && 'fetching'}>
        <Render />
        <RenderPagination />

        {isDisplayDetail && 
          <Modal 
            show={isDisplayDetail}
            close={() => this.setState({ isDisplayDetail: false })}
          >
            <MovieDetail data={clickedMovie} />
          </Modal>
        }

      </MovieListContainer>
    );
  }
}

MovieList.propTypes = {
  currentPagination: PropTypes.number,
  list: PropTypes.object,
  search: PropTypes.string,
  updatePagination: PropTypes.func,
  updateList: PropTypes.func,
};

export default MovieList;
