const initialState = {
    userId: null,
    token: null,
    role: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          userId: action.payload.userId,
          token: action.payload.token,
          role: action.payload.role,
        };
      case 'LOGOUT_USER':
        return {
          ...initialState
        };
      default:
        return state;
    }
  };
  
  export default userReducer;