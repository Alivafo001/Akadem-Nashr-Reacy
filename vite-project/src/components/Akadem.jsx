import React from 'react'
import linkOne from '../img/icon-facebook.png'
import linkTwo from '../img/icon-instagram.png'
import linkThree from '../img/icon-telegram.png'
import footerLogo from '../img/logo.svg'

function Akadem() {
  return (
    <>
      <section class="akadem">
        <div class="container akadem__container">
            <div class="akadem__info">
                <a href="#">
                    <img class="akadem__info__img" src={footerLogo} alt="footer logo" />
                </a>
                <div class="akadem__info__img">
                    <a href="#">
                    <img class="img__o" width="24px" height="24px" src={linkThree} alt="icon" />
                    </a>
                    <a href="#">
                    <img class="img__o" width="24" height="24" src={linkOne} alt="icon" />
                    </a>
                    <a href="#">
                    <img class="img__o" width="24" height="24" src={linkTwo} alt="icon" />
                    </a>
                </div>
            </div>
            <hr class="akadem__line" />
            <div class="flex">

                <div class="list__1">
                    <ul class="akadem__list">
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Bosh sahifa
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Kitoblar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Aksiyalar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Yangiliklar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Kontaktlar
                            </a></li>
                    </ul>
                </div>
                <div class="list__2">
                    <ul class="akadem__list">
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                ilmiy nashrlar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Ilmiy-ommabop nashrlar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Ma’rifiy nashrlar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Lug’atlar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Adabiy-badiiy nashrlar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Abituriyentlar uchun
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Bolalar uchun
                            </a></li>
                    </ul>
                </div>
                <div class="list__3">
                    <ul class="akadem__list">
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Ko’p so’raladigan savollar
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Yetkazib berish haqida
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                To’lov usullari haqida
                            </a></li>
                    </ul>
                </div>
                <div class="list__4">
                    <ul class="akadem__list">
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Bo’sh ish o’rinlari
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Biz bilan bog’lanish
                            </a></li>
                        <li class="akadem__item"><a class="akadem__link" href="#">
                                Maxfiylik nizomi
                            </a></li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Akadem