import React from 'react'
import { ArrowIcon } from '../../assets/icons'

function FooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-bottom__row">
                    <p className="footer-bottom__title">
                    2015-2024 Internet-do’kon (*****.**): Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi.

                    </p>
                    <div className="footer-bottom">
                        <div className='footer-bottom__content'>
                            <img className='footer-bottom__content_image' src="https://flagicons.lipis.dev/flags/4x3/uz.svg" alt="usa icon" />
                            <p className="footer-bottom__subtitle">Uzbek</p>
                            <button className='footer-bottom__btn'>
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom