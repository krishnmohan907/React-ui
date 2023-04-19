import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  SignUp  from './SignUp.Component'
import { getStudentDataData }  from './SignUp.Action';

export const mapStateToProps = (state) => ({
    getData: state.SignReducer.getData,
});
console.log('sdsadasdasdasd')
export const mapDispatchToProps = (dispatch) => ({
    getStudentDataData: () => dispatch(getStudentDataData()),

});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUp)
);