import React from 'react';

class AllDoves extends React.Component {

    constructor(props) {
        super(props);
        this.deleteThisDove = this.deleteThisDove.bind(this);
        this.reload = this.reload.bind(this);
    }

    componentDidMount() {
        this.props.fetchDoves();
    }

    deleteThisDove(doveId) {
        this.props.deleteDove(doveId);
        this.reload();
    }

    reload() {
        window.location.reload();
    }

    render() {
        return (
            <div className="animation-container">
                <div className="all-doves-container">
                    <div className="stars2"></div>
                    <div className="twinkling2"></div>
                    <div className="clouds2"></div>
                    <div className="table-container">
                        <table className="all-doves-table" cellspacing="15">
                            <tr className="table-title">
                                <th align="left">ID</th>
                                <th align="left">Active</th>
                                <th align="left">Color</th>
                                <th align="left">Image Count</th>
                                <th align="left">Last Command</th>
                                <th align="left">Deorbit Date</th>
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
                                        <td><button onClick={() => this.deleteThisDove(dove.id)} className="delete-dove-button">
                                            Delete
                        </button></td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllDoves;