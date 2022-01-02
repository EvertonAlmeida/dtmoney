import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
};

export const NewTransactionModal = ({ isOpen, onRequestClose }:NewTransactionModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
        >
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImg} alt="Close modal"></img>
			</button>
			<Container>
            	<h2>Register Transaction</h2>

				<input placeholder="Title"/>
				<input type="number" placeholder="Value"/>
				<input type="text" placeholder="Category" />

				<button type="submit">Add</button>
			</Container>
        </Modal>
    );
};
