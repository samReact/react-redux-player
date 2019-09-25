import reducer from './player.reducer';
import * as types from '../actions/types/player.action.type';

const payload = {
  url:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  reload: true,
};
describe('player reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      reload: false,
    });
  });
  it('should handle SOURCE_CHANGE', () => {
    expect(
      reducer([], {
        type: types.SOURCE_CHANGE,
        payload,
      })
    ).toEqual({
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      reload: true,
    });
  });
});
