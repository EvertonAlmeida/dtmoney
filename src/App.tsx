import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

Modal.setAppElement('#root');

export const App = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

    const handleOpenNewTransactionModal = () => {
        setIsNewTransactionModal(true);
    }

    const handleCloseNewTransactionModal = () => {
        setIsNewTransactionModal(false);
    }
  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
        >
            <h2>Register Transaction</h2>
        </Modal>
        <GlobalStyle />
    </>
  );
}
