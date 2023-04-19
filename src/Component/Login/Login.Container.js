import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginComponent from './LoginComponent'
import { saveStudentData,saveLogindata } from './Login.Action';

export const mapStateToProps = (state) => ({
  studentData: state.LoginReducer.studentData,
});

export const mapDispatchToProps = (dispatch) => ({
  saveStudentData: (data) => dispatch(saveStudentData(data)),
  saveLogindata: (data) => dispatch(saveLogindata(data)),

});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);