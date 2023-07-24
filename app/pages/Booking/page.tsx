import Card from "@/app/components/Card/Card";
import {Roboto} from "next/font/google";
import styles from './style.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

const Booking = () => {
    const booking: Array<IBooking> = [
        {
            id: 1,
            user: 'First User',
            roomType: 'Single',
            roomNum: 103,
            guestAmount: 1,
            payment: 'Credit card',
            source: 'Reception',
            dateFrom: new Date(),
            daysAmount: 3,
            dateTo: new Date(),
            subTotal: 1300,
            advancePayment: 300,
            discount: 50,
            total: 1000,
        },
        {
            id: 2,
            user: 'Second User',
            roomType: 'Duo',
            roomNum: 105,
            guestAmount: 2,
            payment: 'Credit card',
            source: 'Reception',
            dateFrom: new Date(),
            daysAmount: 7,
            dateTo: new Date(),
            subTotal: 1700,
            advancePayment: 600,
            discount: 100,
            total: 2000,
        },
    ]

    return (
        <>
            <header>
                <div className={`${styles.header} ${roboto.className}`}>
                    <h2 className={styles.header__title}>Bookings</h2>
                    <a href="./CheckIn" className={styles.header__button}>Create booking</a>
                </div>
            </header>

            <main>
                <div className={styles.options}>
                    <div className={styles.options__search}>
                        <i></i>
                        <input type="text" placeholder="Search by reservation or guest"/>
                    </div>

                    <div className={styles.options__switch}>
                        <button></button>
                        <button></button>
                    </div>
                </div>

                <div className={`${styles.grid} ${roboto.className}`}>
                    {booking.map(item => <Card booking={item} />)}
                </div>
            </main>

        </>
    )
}

export default Booking;