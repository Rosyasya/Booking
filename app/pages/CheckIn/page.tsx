import {Roboto} from "next/font/google";
import styles from "./style.module.scss";
import Aside from "@/app/components/Aside/Aside";
import Reservation from "@/app/components/Reservation/Reservation";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

const CheckIn = () => {
    return (
        <>
            <header style={{borderBottom: '1px solid #C9C9D4'}}>
                <div className={`${styles.page__header} ${roboto.className}`}>
                    <h2 className={styles.page__header__title}>Check in process</h2>
                    <div className={styles.page__header__info}>
                        <h3>Booking</h3>
                        <h3>id</h3>
                    </div>
                </div>
            </header>

            <div style={{display: 'flex'}}>
                <Aside />

                <Reservation />
            </div>
        </>
    )
}

export default CheckIn;