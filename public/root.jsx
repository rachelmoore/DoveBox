import React from 'react';
import { Provider } from 'react-redux';
import AllDovesContainer from './components/all_doves_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <AllDovesContainer /> 
    </Provider>
);

export default Root;