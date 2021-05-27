import Channel from './channel'
import { connect } from 'react-redux';

const msp = state => {
  return {
    state: state,
  }
}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Channel);