import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  OrderComponent  from '../OrderComponent/OrderComponent';
import { handleSave } from './OrderAction';

export const mapStateToProps = (state) => ({
  saveStudentdata: state.OrderReducer.saveStudentdata
})

export const mapDispatchToProps = (dispatch) => ({
  handleSave: (data) => dispatch(handleSave(data)),

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderComponent)
);