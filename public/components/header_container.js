import { connect } from 'react-redux';
import Header from './header';
import { fetchDoves, fetchDove, deleteDove, createDove } from '../actions/dove_actions';

const mapStateToProps = state => ({
    doves: Object.values(state.doves)
});

const mapDispatchToProps = dispatch => ({
    createDove: () => dispatch(createDove())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
