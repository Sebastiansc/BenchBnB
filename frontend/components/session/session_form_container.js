import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';


let formType;
let processForm;
if (window.location.hash === '#/login') {
  formType = "Log In";
  processForm = login;
} else if (window.location.hash === '#/signup') {
  formType = "Sign Up";
  processForm = signup;
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formType: formType,
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
