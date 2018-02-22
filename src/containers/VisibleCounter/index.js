import { connect } from 'react-redux';

import {
  incrementAction,
  decrementAction,
  spinnerUpdateAction,
} from '../../actions/Counter';

import Counter from '../../components/modules/Counter';

const mapStateToProps = state => (
  {
    counter: state.counter.counter,
    spinnerVal: state.counter.spinnerVal,
  }
);

const mapDispatchToProps = dispatch => (
  {
    incrementCounter: amount => dispatch(incrementAction(amount)),
    decrementCounter: amount => dispatch(decrementAction(amount)),
    onSpinnerChange: newVal => dispatch(spinnerUpdateAction(newVal)),
  }
);

const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default VisibleCounter;
