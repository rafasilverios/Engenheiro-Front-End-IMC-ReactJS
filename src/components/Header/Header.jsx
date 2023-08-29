import Logo from '../img/imc.png';
import styles from './Header.module.css'

const Header = () => {
    const titulo = {
        texto: 'Calculadora de IMC',
        logo: Logo
    }

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.dfCenter}>
                    <h1 className={styles.title}>{titulo.texto}</h1>
                    <img className={styles.img} src={titulo.logo} alt="Logo calculadora IMC" />
                </div>
            </div>
        </header>
    )
}

export default Header;