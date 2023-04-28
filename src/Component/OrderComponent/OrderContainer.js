import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderComponent from '../OrderComponent/OrderComponent';
import { handleSave, getStudentData, editSave, deleteData } from './OrderAction';

export const mapStateToProps = (state) => ({
  saveStudentdata: state.OrderReducer.saveStudentdata,
  StudentRecords: state.OrderReducer.StudentRecords,
  StudentEditRecords: state.OrderReducer.StudentEditRecords,
  total:state.OrderReducer.total,
})

export const mapDispatchToProps = (dispatch) => ({
  handleSave: (data) => dispatch(handleSave(data)),
  getStudentData: (data) => dispatch(getStudentData(data)),
  editSave: (data) => dispatch(editSave(data)),
  deleteData: (id) => dispatch(deleteData(id))

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderComponent)
);