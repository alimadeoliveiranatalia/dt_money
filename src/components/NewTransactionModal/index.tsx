import { useState } from "react";
import Modal from "react-modal";
import inComeImg from "../../assets/entradas.svg";
import outComeImg from "../../assets/saidas.svg";
import closeImg from "../../assets/vector.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    
    const [ type, setType ] = useState('deposit');
    
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
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit')}}
                        isActive={type === 'deposit'}
                    >
                        <img src={ inComeImg } alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                    >
                        <img src={ outComeImg } alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}