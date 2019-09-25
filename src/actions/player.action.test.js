import * as actions from '../actions/player.action';
import * as types from '../actions/types/player.action.type';

describe('player actions', () => {
  it('should create an action to change source url', () => {
    const payload = { url: '' };
    const expectedAction = {
      type: types.SOURCE_CHANGE,
      payload,
    };
    expect(actions.sourceChange(payload)).toEqual(expectedAction);
  });
});
