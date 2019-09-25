import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.component';

const setup = () => {
  const props = {
    sourceChange: jest.fn(),
    card: {
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      source:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',

      subtitle: 'By Blender Foundation',
      thumb:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      title: 'Big Buck Bunny',
    },
  };

  const cardWrapper = shallow(<Card {...props} />);

  return {
    props,
    cardWrapper,
  };
};

describe('components', () => {
  describe('Card', () => {
    it('should render self and subcomponents', () => {
      const { cardWrapper } = setup();
      expect(cardWrapper.find('img').hasClass('image')).toBe(true);
      expect(cardWrapper.find('img').prop('src')).toEqual(
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
      );
    });

    it('should call sourceChange', () => {
      const { cardWrapper, props } = setup();
      const div = cardWrapper.find('div').first();
      expect(props.sourceChange.mock.calls.length).toBe(0);
      div.props().onClick();
      expect(props.sourceChange.mock.calls.length).toBe(1);
    });
  });
});
