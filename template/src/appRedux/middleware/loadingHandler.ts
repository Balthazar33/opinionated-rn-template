import {setLoading} from '../slices/appSlice';
import {RequestState} from '@utils/global-types';

/**
 * Control loading state based on RTK query response
 */
const loadingHandler =
  (state: any) => (next: any) => (action: any) => {
    // if action type ends with 'pending', set loading to true
    if (action?.type?.endsWith(RequestState.PENDING)) {
      state.dispatch(setLoading(true));
    }
    // else, set loading to false for fulfilled & rejected cases
    else if (
      action?.type?.endsWith(RequestState.FULFILLED) ||
      action?.type?.endsWith(RequestState.REJECTED)
    ) {
      state.dispatch(setLoading(false));
    }
    // pass action to reducer
    next(action);
  };

export default loadingHandler;
