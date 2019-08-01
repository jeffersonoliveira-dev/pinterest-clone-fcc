const INITIAL_STATE = {
  auth: false,
  user: [],
  token: ""
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        auth: true,
        user: [action.data]
      };
    default:
      return state;
  }
}

export default rootReducer;
