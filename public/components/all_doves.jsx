import React from 'react';

class AllDoves extends React.Component {

    componentDidMount() {
        this.props.fetchDoves();
    }

    render() {
        return (
            <div>
                
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Active</th>
                        <th>Color</th>
                        <th>Images Collected</th>
                        <th>Last Command</th>
                    </tr>
                    {
                        this.props.doves.map(dove => (
                            <tr>
                                <td>{dove.id}</td>
                                <td>{dove.active}</td>
                                <td>{dove.color}</td>
                                <td>{dove.images_collected}</td>
                                <td>{dove.last_command}</td>
                            </tr>
                        ))
                    }
                </table>
                
            </div>
        );
    }
}

export default AllDoves;