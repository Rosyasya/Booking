import './style.scss'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Card from "@/app/components/Card/Card";

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })


export default function Booking() {
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
          {booking.map(item => <Card booking={item} />)}
        </div>
      </main>

    </>
  )
}
