import styles from "./style.module.scss";
import {Roboto} from "next/font/google";
import Wrapper from "@/app/components/ui/Wrapper/Wrapper";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

const Reservation = () => {
    return (
        <Wrapper className={roboto.className}>
            <div className={`${styles.booking_header}`}>
                <h2>Reservation Details</h2>
                <div className={styles.booking_header__button_container}>
                    <button>Next</button>
                    <button>Cross</button>
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.details__date}>
                    <h5>Dates of stay</h5>
                    <input type="date"/>
                </div>

                <div className={styles.details__select}>
                    <h5>Guests</h5>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <button>Search room</button>
            </div>

            <div className={styles.info}>
                <h4>Available rooms</h4>
                <div className={styles.info__title}>
                    <h5>Room type</h5>
                    <h5>Room #</h5>
                    <h5>Rate plan</h5>
                    <h5>Price</h5>
                    <h5>Quantity</h5>
                </div>
                <div className={styles.info__container}>
                    <h1>Image</h1>
                    <h5>Set dates of stay to see available rooms</h5>
                </div>
            </div>
        </Wrapper>
    )
}

export default Reservation;