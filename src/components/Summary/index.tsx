import { Container } from "./styles";
import inComeImg from "../../assets/entradas.svg";
import outComeImg from "../../assets/saidas.svg";
import totalComeImg from "../../assets/total.svg";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={ inComeImg } alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={ outComeImg } alt="Saidas" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={ totalComeImg } alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}