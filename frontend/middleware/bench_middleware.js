import { REQUEST_BENCHES,
         receiveBenches } from '../actions/bench_actions';
import { fetchBenches } from '../util/bench_api_util';

const BenchMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  switch(action.type){
    case REQUEST_BENCHES:
      success = response => dispatch(receiveBenches(response));
      fetchBenches(success);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchMiddleware;
