import { connect } from 'react-redux';
import {
  messageHello,
  messageBye,
} from '../../actions/Message';
import Message from '../../components/modules/Message';

const mapStateToProps = state => (
  {
    message: state.message.message,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onHelloClick: () => dispatch(messageHello()),
    onByeClick: () => dispatch(messageBye()),
  }
);

const VisibleMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

export default VisibleMessage;
