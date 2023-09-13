import React from 'react'
import actionbanner from '../img/sale-img.png'

function Action() {
  return (
    <>
      <section class="action">
        <div class="container action__container">
            <div class="action__info">
                <h2 class="action__title">Bolalar kitoblari uchun
                    ajoyib aksiya!</h2>
                <p class="action__text">Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun turli mashq
                    qo’llanmalari va komikslar.</p>
                <p class="action__text__two">Aksiyadagi eng katta to’plamda <span>50 ta kitob</span>ni <span>350
                        ming</span> so’mga (aslida 383 ming so’m) sotib olishingiz mumkin.</p>
                <a href="#" class="main-link">Buyurtma berish</a>
            </div>
            <img class="action__img" src={actionbanner} alt="banner" />
        </div>
    </section>
    </>
  )
}

export default Action