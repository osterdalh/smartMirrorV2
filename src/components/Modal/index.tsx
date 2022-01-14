import { useState } from 'react';
import Modal from 'react-modal';
import { ModalContainer } from './styles';


declare global {
    interface Window {
        gapi: any;
    }
}

const PageModal: React.FC = ({ children }) => {

    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = useState(false);


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            color: 'red'
        },
    };
    const closeModal = () => {
        setIsOpen(false);
    }
// 


// 






    return (
        <ModalContainer>
            <i className="fas fa-ellipsis-h" onClick={() => setIsOpen(!modalIsOpen)}></i>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <h1>hei</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat deserunt ipsa asperiores incidunt praesentium distinctio aut atque consequatur fugiat!</p>
                {children}
                <button id="authorize_button" style={{ display: "block" }}>Authorize</button>
            <button id="signout_button" style={{ display: "none" }}>Sign Out</button>
            <pre id="content" style={{ whiteSpace: "pre-wrap" }}></pre>
            </Modal>
        </ModalContainer>
    );
};

export default PageModal;
