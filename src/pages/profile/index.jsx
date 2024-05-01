import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
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
                <img src="https://cdn.dribbble.com/users/1928646/screenshots/5781055/support.gif" alt="" />
              </div>
              <div className="cart-empty__content">
                <h3 className="cart-empty__title">Ta'mirlash ishlari olib borilmoqda!</h3>
                <button className="cart-empty__button" onClick={handleBack}>Bosh menyuga qaytish</button>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default ProfilePage