import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyling from './modal_styling';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            id: "",
            active: true,
            color: "",
            last_command: "",
            deorbit_dt: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.reload = this.reload.bind(this);
    }

    closeModal() {
        this.setState({ modalOpen: false });
        // this.props.clearErrors();
    }

    openModal(type) {
        this.setState({ modalOpen: true });
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = this.state.id;
        const color = this.state.color;
        const lastCommand = this.state.last_command;
        const deorbitDt = this.state.deorbit_dt;
        const thisDove = { id: id, color: color, last_command: lastCommand, deorbit_dt: deorbitDt, active: true, images_collected: 0 };
        const stringifiedDove = JSON.stringify(thisDove);
        console.log("THIS IS NORMAL DOVE OBJECT");
        console.log(thisDove);

        console.log("THIS IS A STRINGIFY");
        console.log(JSON.stringify(thisDove));

        // this.props.createDove(thisDove);
        // this.props.createDove(stringifiedDove);
        $.ajax({
            method: 'POST',
            contentType: "application/json",
            url: `http://localhost:3000/doves`,
            data: JSON.stringify(thisDove)
        });
        this.reload();
    }

    reload() {
        window.location.reload();
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }


    render() {
            return (
                <div className="nav-container">
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds"></div>

                    <div className="nav-content">
                        <div className="logo-container">
                            <h1 className="logo-text">DoveBox</h1>
                        </div>

                        <div className="nav-button">
                            <button className="create-dove-button" onClick={this.openModal}>Create Dove</button>
                        </div>
                    </div>

                    <Modal
                        isOpen={this.state.modalOpen}
                        onRequestClose={this.closeModal}
                        style={ModalStyling}>

                        <div className="modal-form-container">
                            <form className="create-form-box">

                                <div className="modal-logo">
                                    <h2 className="modal-logo-text">DoveBox</h2>
                                </div>

                                <div className="create-form">

                                    <label className="modal-label">Dove ID
                                        <input type="text"
                                            className="modal-input"
                                            value={this.state.id}
                                            onChange={this.update('id')}
                                        />
                                    </label>

                                    <label className="modal-label">Color
                                        <input type="text"
                                            className="modal-input"
                                            value={this.state.color}
                                            onChange={this.update('color')}
                                        />
                                    </label>

                                    <label className="modal-label">Last Command
                                        <input type="text"
                                            className="modal-input"
                                            value={this.state.last_command}
                                            onChange={this.update('last_command')}
                                        />
                                    </label>

                                    <label className="modal-label">Deorbit Date
                                        <input type="text"
                                            className="modal-input"
                                            value={this.state.deorbit_dt}
                                            onChange={this.update('deorbit_dt')}
                                        />
                                    </label>

                                    

                                    <div className="modal-button-container">
                                        <button className="modal-button" onClick={this.handleSubmit}>
                                            Launch Dove
                                        </button>
                                    </div>


                                </div>

                            </form>
                        </div>

                    </Modal>
                </div>
            );
        }
    }


export default Header;
