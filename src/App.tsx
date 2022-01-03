import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
import Modal from "react-modal";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
    </TransactionsProvider>
  );
}
