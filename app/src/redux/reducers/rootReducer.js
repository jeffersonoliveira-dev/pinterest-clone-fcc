const INITIAL_STATE = { data: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: [...state.data, action.data]
      };
    default:
      return state;
  }
}

export default rootReducer;
