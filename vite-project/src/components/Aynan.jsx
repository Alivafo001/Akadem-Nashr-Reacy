import React from 'react'
import iconOne from '../img/icon1.png'
import iconTwo from '../img/icon2.png'
import iconThree from '../img/icon3.png'


function Aynan() {
  return (
    <>
        <section className="aynan">
        <div className="container">
            <hr className="aynan__line" />
            <h2 className="aynan__title">Nega aynan <br  />
                Akademnashr?</h2>
            <div className="info__aynan">
                <div className="card">
                    <img className="icon1" src={iconOne} alt="icon" />
                    <h3 className="card__title">Oson buyurtma qilish</h3>
                    <p className="card__text">Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda buyurtma qila
                        olasiz.</p>
                </div>

                <div className="card">
                    <img className="icon1" src={iconTwo} alt="icon" />
                    <h3 className="card__title">Eng sara kitoblar</h3>
                    <p className="card__text">Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har xil janrdagi
                        kitoblarni topa olasiz.</p>
                </div>

                <div className="card">
                    <img className="icon1" src={iconThree} alt="icon" />
                    <h3 className="card__title">Tez yetkazib berish</h3>
                    <p className="card__text">O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro buyurtmalarni 10
                        ish kuni ichida yetkazib beriladi.</p>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Aynan