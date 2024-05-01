import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon, CompanyIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../assets/icons'
import FooterBottom from './FooterBottom'

function Footer() {

    const list = [
        {
            id: 1,
            title: 'Ma\'lumotlar',
            subtitle: 'Biz haqimizda',
            subtitle1: 'Do\'kon toping',
            subtitle2: 'Turkumlar',
            subtitle3: 'Bloglar'
        },
        {
            id: 2,
            title: 'Hamkorlik',
            subtitle: 'Biz haqimizda',
            subtitle1: 'Do\'kon toping',
            subtitle2: 'Turkumlar',
            subtitle3: 'Bloglar'
        },
        {
            id: 3,
            title: 'Ma\'lumot',
            subtitle: 'Yordam markazi',
            subtitle1: 'Pulni qaytarish',
            subtitle2: 'Yetkazib berish',
            subtitle3: 'Biz bilan bog\'lanish'
        },
        {
            id: 4,
            title: 'Foydalanuvchilar uchun',
            subtitle: 'Kirish',
            subtitle1: 'Roʻyxatdan oʻtish',
            subtitle2: 'Sozlamalar',
            subtitle3: 'Mening Buyurtmalarim'
        },
    ]

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logo">
                        <Link to={'/'}>
                            <img src="/images/logo.jpg" className='header_logo' alt="site logo" />
                        </Link>
                        <p className="footer-logo__subtitle">
                            Bizda qulay narxlar va uyga yetkazib berish mavjud
                        </p>
                        <div className="footer-logo__links">
                            <Link className='footer-logo__icon'>
                                <FacebookIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <TwitterIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <CompanyIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <InstagramIcon />
                            </Link>
                            <Link className='footer-logo__icon'>
                                <YoutubeIcon />
                            </Link>
                        </div>
                    </div>

                    <div className="footer-main">
                        {list.map(item => (
                            <div className="footer-links" key={item.id}>
                                <h3 className="footer-links__title">{item.title}</h3>
                                <Link className="footer-links__subtitle">{item.subtitle}</Link>
                                <Link className="footer-links__subtitle">{item.subtitle1}</Link>
                                <Link className="footer-links__subtitle">{item.subtitle2}</Link>
                                <Link className="footer-links__subtitle">{item.subtitle3}</Link>
                            </div>
                        ))}
                    </div>

                    <div className="footer-apps">
                        <h2 className='footer-apps__title'>Ilovani oling</h2>
                        <div className='footer-apps__store'>
                            <img src="/images/footer/app-store.png" alt="site logo" />
                        </div>
                        <div className='footer-apps__google'>
                            <img src="/images/footer/google-play.png" alt="site logo" />
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    )
}

export default Footer