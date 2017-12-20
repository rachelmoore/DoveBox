import React from 'react';

class AllDoves extends React.Component {

    componentDidMount() {
        this.props.fetchDoves();
    }

    render() {
        return (
            <div>
                
                <ul>
                    {
                        this.props.doves.map(dove => (
                            <li>{dove.id}</li>
                        ))
                    }
                </ul>
                
            </div>
        );
    }
}

export default AllDoves;