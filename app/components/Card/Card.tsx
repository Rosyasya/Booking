import styles from './Card.module.scss'

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.options}>
                <a href="#">#394017</a>
                <button>menu</button>
            </div>

            <h2 className={styles.title}>Guy Hawkins</h2>

            <div className={styles.info}>
                <div className={styles.infoContainer}>
                    <h5>Type room</h5>
                    <h4>Superior</h4>
                </div>
                <div className={styles.infoContainer}>
                    <h5>Room #</h5>
                    <h4>202</h4>
                </div>
                <div className={styles.infoContainer}>
                    <h5>Guests</h5>
                    <h4>2</h4>
                </div>
                <div className={styles.infoContainer}>
                    <h5>Payment method</h5>
                    <h4>Credit card</h4>
                </div>
                <div className={styles.infoContainer}>
                    <h5>Source</h5>
                    <h4>Reception</h4>
                </div>
            </div>

            <div className={styles.date}>
                <div className={styles.dateContainer}>
                    <h4>9-9-2022</h4>
                    <h4>1:00 PM</h4>
                </div>
                <div className={styles.dateContainer}>
                    <h4>4</h4>
                    <h4>nights</h4>
                </div>
                <div className={styles.dateContainer}>
                    <h4>13-9-2022</h4>
                    <h4>11:00 PM</h4>
                </div>
            </div>

            <div className={styles.price}>
                <div className={styles.priceContainer}>
                    <h4 className={styles.priceContainerTitle}>Sub Total</h4>
                    <h4>$800</h4>
                </div>
                <div className={styles.priceContainer}>
                    <h4 className={styles.priceContainerTitle}>Advance Payment</h4>
                    <h4>$100</h4>
                </div>
                <div className={styles.priceContainer}>
                    <h4 className={styles.priceContainerTitle}>Discount</h4>
                    <h4>$50</h4>
                </div>
                <div className={styles.priceContainer}>
                    <h4 className={styles.priceContainerTitle}>Total</h4>
                    <h4>$700</h4>
                </div>
            </div>

            <a className={styles.link} href="#">Check out</a>
        </div>
    )
}

export default Card;