const ModalStyling = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(000, 000, 000, 0.75)',
        zIndex: 10
    },
    content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        transform: 'translate(-50%, -50%)',
        bottom: 'auto',
        border: '2px solid #2e2e2e',
        padding: '20px',
        zIndex: 11,
        backgroundColor: '#e5e5e5'
    }
};

export default ModalStyling;
