import './home.scss'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

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
          <div className="grid__card">
            <div className="grid__card-options">
              <a href="#">#394017</a>
              <button>menu</button>
            </div>

            <h2 className="grid__card-title">Guy Hawkins</h2>

            <div className="grid__card-info">
              <div className="grid__card-info-container">
                <h5>Type room</h5>
                <h4>Superior</h4>
              </div>
              <div className="grid__card-info-container">
                <h5>Room #</h5>
                <h4>202</h4>
              </div>
              <div className="grid__card-info-container">
                <h5>Guests</h5>
                <h4>2</h4>
              </div>
              <div className="grid__card-info-container">
                <h5>Payment method</h5>
                <h4>Credit card</h4>
              </div>
              <div className="grid__card-info-container">
                <h5>Source</h5>
                <h4>Reception</h4>
              </div>
            </div>

            <div className="grid__card-date">
              <div className="grid__card-date-container">
                <h4>9-9-2022</h4>
                <h4>1:00 PM</h4>
              </div>
              <div className="grid__card-date-container">
                <h4>4</h4>
                <h4>nights</h4>
              </div>
              <div className="grid__card-date-container">
                <h4>13-9-2022</h4>
                <h4>11:00 PM</h4>
              </div>
            </div>

            <div className="grid__card-price">
              <div className="grid__card-price-container">
                <h4 className="grid__card-price-container-title">Sub Total</h4>
                <h4>$800</h4>
              </div>
              <div className="grid__card-price-container">
                <h4 className="grid__card-price-container-title">Advance Payment</h4>
                <h4>$100</h4>
              </div>
              <div className="grid__card-price-container">
                <h4 className="grid__card-price-container-title">Discount</h4>
                <h4>$50</h4>
              </div>
              <div className="grid__card-price-container">
                <h4 className="grid__card-price-container-title">Total</h4>
                <h4>$700</h4>
              </div>
            </div>

            <a className="grid__card-link" href="#">Check out</a>
          </div>
        </div>
      </main>

    </>
  )
}
