import { SOURCE_CHANGE } from './types/player.action.type';

export const sourceChange = payload => ({
  payload,
  type: SOURCE_CHANGE,
});
