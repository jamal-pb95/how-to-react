export const createStore = (reducer) => {
  let currentState = null;
  let mainReducer = reducer;
  let mainListener = null;

  const getState = () => {
    return currentState;
  }

  const subscriber = (listener) => {
    mainListener = listener;
  }
  
  const dispatch = (action) => {
    currentState = mainReducer(currentState, action);
    mainListener();
  }

  return {
    dispatch,
    getState,
    subscriber
  };
}