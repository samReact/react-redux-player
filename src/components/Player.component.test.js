import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player.component';
import configureStore from 'redux-mock-store';
import * as ReactReduxHooks from './react-redux-hooks';

describe('Player component', () => {
  let playerWrapper;
  let store;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const initialState = { url: 'http://fakeUrl.com' };
    store = mockStore(initialState);
    /* mocking useEffect */
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    /* mocking useSelector on our mock store */
    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation(state => store.getState());
    playerWrapper = shallow(<Player store={store} />);
  });
  describe('Player', () => {
    it('should render one Player component', () => {
      expect(playerWrapper.find('Player')).toHaveLength(1);
    });

    it('should have a src prop with an url', () => {
      expect(
        playerWrapper
          .find('Player')
          .dive()
          .find('source')
          .prop('src')
      ).toEqual({ url: 'http://fakeUrl.com' });
    });
  });
});
