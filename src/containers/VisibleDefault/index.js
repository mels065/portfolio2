import { connect } from 'react-redux'
import {
  defaultHello,
  defaultBye
} from '../../actions/default'
import Default from '../../components/Default'

const mapStateToProps = state => {
  return {
    message: state.default.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHelloClick: () => dispatch(defaultHello()),
    onByeClick: () => dispatch(defaultBye())
  }
}

const VisibleDefault = connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)

export default VisibleDefault
