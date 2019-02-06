import axios from 'axios';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { COLORS, CONFIG } from '@/common';

const SearchForm = styled.form`
  margin: 15px auto;
`;

const SearchBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 10px 0;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid ${COLORS.GREY};
  box-sizing: border-box;
  flex: 1;
  font-size: 15px;
  height: 40px;
  margin-right: 10px;
  padding: 10px 15px;
`;

const Button = styled.button`
  background: ${COLORS.LIGHT_BLUE};
  border-radius: 5px;
  border: 1px solid ${COLORS.LIGHT_BLUE};
  color: ${COLORS.WHITE};
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
`;

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: props.search,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange =  this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { updateSearch } = this.props;
    updateSearch(e.target.value);
    return this.handleChange(e);
  }

  handleChange(e) {
    const { name, value } = e.target;
    return this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { search } = this.state;
    const { updateList, updatePagination } = this.props;

    updatePagination(1); // Return the pagination into page 1
    const req = await axios.get(`
      ${CONFIG.API_URL}/search/movie?api_key=${CONFIG.API_KEY}&language=en-US&query=${search}&page=1&include_adult=true
    `);

    return updateList(req.data);
  }

  render() {
    const { search } = this.state;

    return (
      <SearchForm onSubmit={this.handleSubmit}>

        <SearchBar>
          <Input 
            name='search'
            type='text' 
            placeholder='Search' 
            value={search}
            onChange={this.handleInputChange}
          />

          <Button>Search</Button>
        </SearchBar>

      </SearchForm>
    );
  }
}

Search.propTypes = {
  list: PropTypes.object,
  search: PropTypes.string,
  updateList: PropTypes.func,
  updatePagination: PropTypes.func,
  updateSearch: PropTypes.func,
};

export default Search;
