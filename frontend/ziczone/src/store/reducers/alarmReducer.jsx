const initialState = {
    alarms: [],
    unread: false,
  };
  
  const alarmReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ALARMS':
        return {
          ...state,
          alarms: action.payload
        };
      case 'ADD_ALARM':
        return {
          ...state,
          alarms: [action.payload, ...state.alarms],
          unread: true
        };
      case 'READ_ALARM':
        return {
          ...state,
          alarms: state.alarms.map(alarm => ({ ...alarm, readOrNot: true })),
          unread: false
        };
      case 'DELETE_ALARM':
        return initialState;
      case 'SET_UNREAD':
        return {
          ...state,
          unread: action.payload
        };
      default:
        return state;
    }
  };
  
  export default alarmReducer;