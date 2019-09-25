import { SOURCE_CHANGE } from '../actions/types/player.action.type';

const initialState = {
  url:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  reload: false,
};

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SOURCE_CHANGE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
