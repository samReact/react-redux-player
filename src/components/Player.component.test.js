import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import * as PlayerMethods from '../utils/player-methods';
import PlayerComponent from './Player.component';
import * as ReactReduxHooks from '../utils/react-redux-hooks';

describe('Player component', () => {
  let playerWrapper;
  let store;
  let useEffect;
  let play;
  let pause;
  let load;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  const mockUsePlay = () => {
    play.mockImplementation(() => {});
  };
  const mockUsePause = () => {
    pause.mockImplementation(() => {});
  };
  const mockUseLoad = () => {
    load.mockImplementation(() => {});
  };

  beforeEach(() => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const initialState = { url: 'http://fakeUrl.com' };
    /* mocking store */
    store = mockStore(initialState);

    /* mocking useEffect */
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    /* mocking useSelector on our mock store */
    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation(state => store.getState());

    play = jest.spyOn(PlayerMethods, 'Play');
    mockUsePlay();

    pause = jest.spyOn(PlayerMethods, 'Pause');
    mockUsePause();

    load = jest.spyOn(PlayerMethods, 'Load');
    mockUseLoad();

    playerWrapper = shallow(<PlayerComponent store={store} />);
  });
  afterEach(() => {
    load.mockClear();
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

    describe('ControllButtonsWrapper', () => {
      it('should render two Buttons', () => {
        expect(playerWrapper.find('Button')).toHaveLength(2);
      });
      describe('Play Button', () => {
        it('should call play function on click and load video', () => {
          const button = playerWrapper.find('Button').first();
          button.simulate('click');
          expect(play.mock.calls.length).toBe(1);
          expect(load.mock.calls.length).toBe(1);
        });
      });
      describe('Pause Button', () => {
        it('should call pause function on click and load video', () => {
          const button = playerWrapper.find('Button').last();
          button.simulate('click');
          expect(pause.mock.calls.length).toBe(1);
          expect(load.mock.calls.length).toBe(1);
        });
      });
    });
  });
});
