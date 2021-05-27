import home from './home';
import { connect } from 'react-redux';
import { submitRoom } from '../../actions/roomActions';

const mdp = dispatch => ({
  submitRoom: () => dispatch(submitRoom())
})

export default connect(null, mdp)(home);