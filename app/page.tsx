import './home.scss'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Card from "@/app/components/Card/Card";

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })


export default function Home() {
  return (
    <>
      <nav>
        <div className={`navigation ${roboto.className}`}>
          <div className="navigation__container">
            <nav className="navigation__links">
              <ul>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Guests</a></li>
                <li><a href="#">Booking</a></li>
              </ul>
            </nav>
            <div className="navigation__user">
              <p>User Name</p>
              <p>bell</p>
              <p>menu</p>
            </div>
          </div>
        </div>
      </nav>

      <header>
        <div className={`header ${roboto.className}`}>
          <h2 className="header__title">Bookings</h2>
          <button className="header__button">Create booking</button>
        </div>
      </header>

      <main>
        <div className="options">
          <div className="options__search">
            <i></i>
            <input type="text" placeholder="Search by reservation or guest"/>
          </div>

          <div className="options__switch">
            <button className="switch__button"></button>
            <button className="switch__button"></button>
          </div>
        </div>

        <div className={`grid ${roboto.className}`}>
          <Card />
        </div>
      </main>

    </>
  )
}
