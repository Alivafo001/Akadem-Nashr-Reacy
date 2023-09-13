import React from 'react'
import heroBanner from '../img/python-book.png'

function Hero() {
  return (
    <>
        <section className="hero">
        <div className="container hero__container">
            <div className="hero__info">
                <hr className="line hero__line" />
                <h1 className="hero__title">Pythonda dasturlash
                    asoslari</h1>
                <p className="hero__text">Dasturlash asoslariga oid o‘zbek tilidagi ilk eng <br  /> mukammal qo‘llanma.
                    Kitobning har bir bo‘limi <br  /> uchun maxsus video darslar yozilgan bo‘lib, ularga <br  /> kitobda
                    ko‘rsatilgan QR kod orqali o‘tish mumkin.</p>
                <a href="#" className="main-link ">Buyurtma berish</a>
            </div>
            <img className="hero__img" alt="banner" width="510" src={heroBanner} />
        </div>
    </section>
    </>
  )
}

export default Hero