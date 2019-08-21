const INITIAL_STATE = {
  auth: false,
  user: {
    name: '',
    images: [],
  },
  token: '',
};

// changes

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        auth: true,
        user: {
          name: action.name,
          images: action.images,
        },
        token: action.token,
      };
    default:
      return state;
  }
}

export default rootReducer;
