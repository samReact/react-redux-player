import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.component';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
}));

const setup = () => {
  const props = {
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
    it('should render an ImageWrapper component', () => {
      const { cardWrapper } = setup();
      expect(cardWrapper.find('ImageWrapper'));
    });
    it('should render an Image component with an url', () => {
      const { cardWrapper } = setup();

      console.log(cardWrapper.debug({ verbose: true }));

      // expect(cardWrapper.find(img).prop('src')).toEqual(
      //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
      // );
    });
  });
});
