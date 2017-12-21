import React from 'react';

class AllDoves extends React.Component {

    componentDidMount() {
        this.props.fetchDoves();
    }

    render() {
        return (
            <div className="all-doves-container">
                <div className="table-container">
                    <table className="all-doves-table">
                        <tr className>
                            <th>ID</th>
                            <th>Active</th>
                            <th>Color</th>
                            <th>Images Collected</th>
                            <th>Last Command</th>
                            <th>Deorbit Date</th>
                        </tr>
                        {
                            this.props.doves.map(dove => (
                                <tr>
                                    <td>{dove.id}</td>
                                    <td>{ String(dove.active) }</td>
                                    <td>{dove.color}</td>
                                    <td>{dove.images_collected}</td>
                                    <td>{dove.last_command}</td>
                                    <td>{dove.deorbit_dt}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        );
    }
}

export default AllDoves;