import { connect } from 'react-redux';

import { sourceChange } from '../actions/player.action';
import Card from '../components/Card.component';

const mapDispatchToProps = dispatch => {
  return {
    sourceChange: url => dispatch(sourceChange(url)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
