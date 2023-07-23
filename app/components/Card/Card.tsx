import styles from './style.module.scss'
import PropTypes from "prop-types";

const Card = ( { booking } ) => {
    const day = booking.dateFrom.getDay();
    const month = booking.dateFrom.getMonth();
    const year = booking.dateFrom.getFullYear();
    const hours = booking.dateFrom.getHours();
    const minutes = booking.dateFrom.getMinutes();

    return (
        <div className={styles.card}>
            <div className={styles.options}>
                <a href="#">#{booking.id}</a>
                <button>menu</button>
            </div>

            <h2 className={styles.title}>{booking.user}</h2>

            <div className={styles.info}>
                <div className={styles.info__container}>
                    <h5>Type room</h5>
                    <h4>{booking.roomType}</h4>
                </div>
                <div className={styles.info__container}>
                    <h5>Room #</h5>
                    <h4>{booking.roomNum}</h4>
                </div>
                <div className={styles.info__container}>
                    <h5>Guests</h5>
                    <h4>{booking.guestAmount}</h4>
                </div>
                <div className={styles.info__container}>
                    <h5>Payment method</h5>
                    <h4>{booking.payment}</h4>
                </div>
                <div className={styles.info__container}>
                    <h5>Source</h5>
                    <h4>{booking.source}</h4>
                </div>
            </div>

            <div className={styles.date}>
                <div className={styles.date__container}>
                    <h4>{`${day}-${month}-${year}`}</h4>
                    <h4>{`${hours}:${minutes} PM`}</h4>
                </div>
                <div className={styles.date__container}>
                    <h4>{booking.daysAmount}</h4>
                    <h4>{booking.daysAmount === 1 ? 'night' : 'nights'}</h4>
                </div>
                <div className={styles.date__container}>
                    <h4>{`${day}-${month}-${year}`}</h4>
                    <h4>{`${hours}:${minutes} PM`}</h4>
                </div>
            </div>

            <div className={styles.price}>
                <div className={styles.price__container}>
                    <h4 className={styles.price__title}>Sub Total</h4>
                    <h4>${booking.subTotal}</h4>
                </div>
                <div className={styles.price__container}>
                    <h4 className={styles.price__title}>Advance Payment</h4>
                    <h4>${booking.advancePayment}</h4>
                </div>
                <div className={styles.price__container}>
                    <h4 className={styles.price__title}>Discount</h4>
                    <h4>${booking.discount}</h4>
                </div>
                <div className={styles.price__container}>
                    <h4 className={styles.price__title}>Total</h4>
                    <h4>${booking.total}</h4>
                </div>
            </div>

            <a className={styles.link} href="#">Check out</a>
        </div>
    )
}

Card.propTypes = {
    booking: PropTypes.object,
}

export default Card;