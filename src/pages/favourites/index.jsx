import React from 'react'
import { FavouriteList } from './components'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function FavouritesPage() {
  const { items } = useSelector(state => state.favorite)
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='favourite-page'>
      <div className="container">
        {
          items.length <= 0 ?
            <div className='cart-empty'>
              <div className="cart-empty__image">
                <img src="./public/images/no-favorite.jpg" className='cart-empty__image_image' alt="empty cart image" />
              </div>
              <div className="cart-empty__content">
                <h3 className="cart-empty__title">Sevimli mahsulotlar yo'q</h3>
                <Link to='/'>
                   <button className="cart-empty__button">Bosh menyuga qaytish</button>
                </Link>
              </div>
            </div>
            :
            <>
              <h1 className='favourite-page__title'>Sevimli Mahsulotlar</h1>
              <div className="favourite-page__row">
                <FavouriteList />
                <div className="favourite-page__right">
                </div>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default FavouritesPage
