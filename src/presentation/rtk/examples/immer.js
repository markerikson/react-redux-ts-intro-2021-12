import produce from "immer";

// Plain JS with object spread and map
return {
  ...state,
  first: {
    ...state.first,
    second: state.first.second.map((item, i) => {
      if (i !== index) return item;

      return {
        ...item,
        value: 123
      };
    })
  }
};

// Immer
return produce(state, draft => {
  // "Mutating" the draft here is safe - it's a Proxy wrapper!
  draft.first.second[index].value = 123;
});
