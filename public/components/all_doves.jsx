import React from 'react';

class AllDoves extends React.Component {

    componentDidMount() {
        this.props.fetchDoves();
    }

    render() {
        return (
            <div>
                
                    <h1>this.props.doves</h1>
                
            </div>
        );
    }
}

export default AllDoves;