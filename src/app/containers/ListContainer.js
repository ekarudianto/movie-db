import { connect } from 'react-redux';
import List from '@/app/components/List';
import { updatePagination, updateList } from '@/app/redux/actions';

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);