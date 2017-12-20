import { connect } from 'react-redux';
import AllDoves from './all_doves';
import { fetchDoves, fetchDove, deleteDove } from '../actions/dove_actions';

const mapStateToProps = state => ({
    doves: Object.values(state.doves)
});

const mapDispatchToProps = dispatch => ({
    fetchDoves: () => dispatch(fetchDoves())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllDoves);
