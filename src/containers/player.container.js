import { connect } from 'react-redux';
import Player from '../components/Player.component';

const mapStateToProps = state => {
  return {
    url: state.playerReducer.url,
    reload: state.playerReducer.reload,
  };
};

export default connect(
  mapStateToProps,
  null
)(Player);
