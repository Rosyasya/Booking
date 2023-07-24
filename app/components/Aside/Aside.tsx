import styles from "./style.module.scss";
import {Roboto} from "next/font/google";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

const Aside = () => {
    return (
        <div className={`${styles.aside} ${roboto.className}`}>
            <div className={styles.aside__container}>
                <div className={styles.aside__container__outside}><div className={styles.aside__container__inside}></div></div>
                <h4>Reservation Details</h4>
            </div>
            <div className={styles.aside__container}>
                <div className={styles.aside__container__outside}><div className={styles.aside__container__inside}></div></div>
                <h4>Guest Information</h4>
            </div>
            <div className={styles.aside__container}>
                <div className={styles.aside__container__outside}><div className={styles.aside__container__inside}></div></div>
                <h4>Payment method</h4>
            </div>
            <div className={styles.aside__container}>
                <div className={styles.aside__container__outside}><div className={styles.aside__container__inside}></div></div>
                <h4>Confimation</h4>
            </div>
        </div>
    )
}

export default Aside;