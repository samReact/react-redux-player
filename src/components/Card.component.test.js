import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.component';
import configureStore from 'redux-mock-store';
import { SOURCE_CHANGE } from '../actions/types/player.action.type';
import * as ReactReduxHooks from './react-redux-hooks';

describe('Card component', () => {
  let cardWrapper;
  let store;

  beforeEach(() => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const initialState = {};
    store = mockStore(initialState);
    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    cardWrapper = shallow(<Card card={{}} store={store} />);
  });
  describe('ImageWrapper', () => {
    it('should render one ImageWrapper component', () => {
      expect(cardWrapper.find('ImageWrapper')).toHaveLength(1);
    });

    it('should dispatch action on click', () => {
      cardWrapper.find('ImageWrapper').simulate('click');
      const actions = store.getActions();
      const expectedPayload = { payload: { url: undefined }, type: SOURCE_CHANGE };
      expect(actions).toEqual([expectedPayload]);
    });
  });
});
