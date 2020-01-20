let defaultState = {
  isPing: false,
  isPong: false,
  isPlaying: false
};

const pingPongReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "PING":
      return {
        ...state,
        isPing: true,
        isPong: false
      };
    case "PONG":
      return {
        ...state,
        isPing: false,
        isPong: true
      };
    case "TOGGLEPLAYING":
      return {
        ...state,
        isPlaying: !state.isPlaying,
        isPing: false,
        isPong: false
      };
    default:
      return state;
  }
};

export default pingPongReducer;
