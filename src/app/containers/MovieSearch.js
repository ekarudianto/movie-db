import { connect } from 'react-redux';
import Search from '@/app/components/Search';
import { updateList, updateSearch, updatePagination } from '@/app/redux/actions';

const mapStateToProps = state => {
  return { 
    currentPagination: state.currentPagination,
    list: state.list,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: list => dispatch(updateList(list)),
    updatePagination: num => dispatch(updatePagination(num)),
    updateSearch: search => dispatch(updateSearch(search)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);