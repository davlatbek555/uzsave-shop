import React from 'react'
import { useNavigate } from 'react-router-dom'
function NotFoundPage() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='cart-page'>
      <div className="container">
        {
            <div className='cart-empty'>
              <div className="error">
                <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
              </div>
              <div className="cart-empty__content">
                <h3 className="cart-empty__title">Nimadir xato!</h3>
                <button className="cart-empty__button" onClick={handleBack}>Bosh menyuga qaytish</button>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default NotFoundPage