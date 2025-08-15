//import './styles.css'
import styles from "./Card.module.scss"

const Card = ()=> {
    const textStyles = {
        color: "blue", 
        fontSize: "2rem", 
        textAlign:"center"
    }
    return (
        // <div className={styles.card}>
        // Soy una tarjeta!
        // </div>
        <div style={textStyles}>
        Soy una tarjeta!
        </div>
    )
}

export default Card;