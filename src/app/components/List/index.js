import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MovieList from './MovieList';

const ListContainer = styled.div``;

class List extends PureComponent {
  render() {
    const { 
      currentPagination, 
      list, 
      search,
      updateList,
      updatePagination,
    } = this.props;

    return (
      <ListContainer>
        <MovieList 
          currentPagination={currentPagination}
          list={list}
          search={search}
          updateList={updateList}
          updatePagination={updatePagination}
        />
      </ListContainer>
    );
  }
}

List.propTypes = {
  currentPagination: PropTypes.number,
  list: PropTypes.object,
  search: PropTypes.string,
  updatePagination: PropTypes.func,
  updateList: PropTypes.func,
};

export default List;
