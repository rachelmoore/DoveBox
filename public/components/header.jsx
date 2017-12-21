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
        this.props.createDove();
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

                    <div className="logo-container">
                        <h2>DoveBox</h2>
                        <img src="https://solarsystem.nasa.gov/images/galleries/618486main_earth_320.jpg" height="50px" className="nav-logo-img" />
                    </div>

                    <div className="nav-button">
                        <button className="create-dove-button" onClick={this.openModal}>Create Dove</button>
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
