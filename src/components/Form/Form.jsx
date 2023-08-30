import { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculaIMC = () => {
        const imc = peso / (altura * altura);
        setResultado(imc)
    }

    const renderizaResultado = () => {
        if (resultado == 0) {
            // Não irá aparecer textos ou alertas
        } else if (resultado <= 18.5) {
            return (
                <div className={styles.resultado}>
                    <h3>Seu IMC é: <b>{resultado.toFixed(2)}</b></h3>
                    <p>Sua classificação é: <b>Baixo Peso</b></p>
                    <div className={styles.content}>
                        <p className={styles.alertaVermelho}>Atenção, você precisa procurar um profissional de saúde para ajudar a ganhar peso, assim você conseguirá melhorar seu IMC gradativamente, até chegar em uma classificação adequada.</p>
                    </div>
                </ div>
            )
        } else if (resultado > 18.5 && resultado < 25) {
            return (
                <div className={styles.resultado}>
                    <h3>Seu IMC é: <b>{resultado.toFixed(2)}</b></h3>
                    <p>Sua classificação é: <b>Peso Normal</b></p>
                    <div className={styles.content}>
                        <p className={styles.alertaVerde}>Parabéns! Continue assim, pois seu corpo e sua saúde agradecem.</p>
                    </div>
                </ div>
            )
        } else if (resultado >= 25 && resultado < 30) {
            return (
                <div className={styles.resultado}>
                    <h3>Seu IMC é: <b>{resultado.toFixed(2)}</b></h3>
                    <p>Sua classificação é: <b>Sobrepeso</b></p>
                    <div className={styles.content}>
                        <p className={styles.alertaLaranja}>Você precisa perder um pouco de peso para chegar na classificação de IMC adequada. Não esqueça de consultar um profissional de saúde.</p>
                    </div>
                </ div>
            )
        } else if (resultado >= 30 && resultado < 35) {
            return (
                <div className={styles.resultado}>
                    <h3>Seu IMC é: <b>{resultado.toFixed(2)}</b></h3>
                    <p>Sua classificação é: <b>Obesidade Grau I</b></p>
                    <div className={styles.content}>
                        <p className={styles.alertaVermelho}>Atencão, você precisa procurar um profissional de saúde para ajudar a perder peso, assim você conseguirá melhorar seu IMC gradativamente, até chegar em uma classificação adequada.</p>
                    </div>
                </ div>
            )
        } else if (resultado >= 35 && resultado < 40) {
            return (
                <div className={styles.resultado}>
                    <h3>Seu IMC é: <b>{resultado.toFixed(2)}</b></h3>
                    <p>Sua classificação é: <b>Obesidade Grau II</b></p>
                    <div className={styles.content}>
                        <p className={styles.alertaVermelho}>Atencão, você precisa procurar um profissional de saúde para ajudar a perder peso, o quanto antes, assim você conseguirá melhorar seu IMC gradativamente, até chegar em uma classificação adequada.</p>
                    </div>
                </ div>
            )
        } else if (resultado >= 40) {
            return (
                <div className={styles.resultado}>
                    <h3>Seu IMC é: <b>{resultado.toFixed(2)}</b></h3>
                    <p>Sua classificação é: <b>Obesidade Grau III</b></p>
                    <div className={styles.content}>
                        <p className={styles.alertaVermelho}>Atencão, você precisa procurar um profissional de saúde para ajudar a perder peso, IMEDIATAMENTE, assim você conseguirá melhorar seu IMC gradativamente, até chegar em uma classificação adequada.</p>
                    </div>
                </ div>
            )
        }
    }

    return (
        <form className={styles.form}>
            <div className="container">
                <h2 className={styles.subtitulo}>Digite os dados abaixo:</h2>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        <input type="number" placeholder="Digite seu Peso" onChange={({ target }) => setPeso(parseFloat(target.value))} />
                        <input type="number" placeholder="Digite sua Altura" onChange={({ target }) => setAltura(parseFloat(target.value))} />
                    </div>
                    <div className={styles.calc}>
                        <button type="button" onClick={calculaIMC}>CALC</button>
                    </div>
                </div>
                {renderizaResultado()}
            </div>
        </form>
    )
}

export default Form;