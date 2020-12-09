// 1) Create a new Redux store
const store = createStore(counterReducer);

// 2) Subscribe to redraw whenever the data changes
store.subscribe(render);

// Our "UI" is some text in a single HTML element
const valueEl = document.getElementById("value");

// 3) When the subscription callback runs:
function render() {
  // 3.1) Get the current store state
  const state = store.getState();
  // 3.2) Extract the data you want
  const newValue = state.value.toString();

  // 3.3) Update the UI with the new value
  valueEl.innerHTML = newValue;
}

// 4) Display the UI with the initial store state
render();

// 5) Dispatch actions based on UI inputs
document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});
