import {Roboto} from "next/font/google";
import styles from "./style.module.scss";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

const Header = () => {
    return (
        <header>
            <div className={`${styles.navigation} ${roboto.className}`}>
                <div className={styles.navigation__container}>
                    <nav className={styles.navigation__links}>
                        <ul>
                            <li><a href="../">Home</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Rooms</a></li>
                            <li><a href="#">Guests</a></li>
                            <li><a href="../pages/Booking" className={styles.active}>Booking</a></li>
                        </ul>
                    </nav>
                    <div className={styles.navigation__user}>
                        <p>User Name</p>
                        <p>bell</p>
                        <p>menu</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;