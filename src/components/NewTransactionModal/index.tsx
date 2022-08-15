import Modal from "react-modal";
import closeImg from "../../assets/vector.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    return (
        <Modal 
            isOpen={ isOpen }
            onRequestClose={ onRequestClose }
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        > 
            <button 
                type="button"
                onClick={ onRequestClose }
                className="react-modal-close"
            >
                <img src={ closeImg } alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar Transacao</h2>
                <input placeholder="Titulo" />
                <input type="number" placeholder="Valor" />
                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}