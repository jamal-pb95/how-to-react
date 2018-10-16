import { createStore } from './my-redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;
    
    default:
      return state;
  }
}

// creating the store
let store = createStore(counter);

// this function just update the state;
const doSomething = () => {
  document.getElementById("counter").innerHTML = store.getState();
}

// registering the subscriber by doSomething method
store.subscribe(doSomething);

// Button event
document.getElementById("increment").addEventListener("click", () => {
  store.dispatch({ type: 'INCREMENT' });
});
document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch({ type: 'DECREMENT' });
});



