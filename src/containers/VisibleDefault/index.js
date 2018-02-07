import { connect } from 'react-redux';
import {
  defaultHello,
  defaultBye,
} from '../../actions/Default';
import Default from '../../components/modules/Default';

const mapStateToProps = state => (
  {
    message: state.default.message,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onHelloClick: () => dispatch(defaultHello()),
    onByeClick: () => dispatch(defaultBye()),
  }
);

const VisibleDefault = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

export default VisibleDefault;
