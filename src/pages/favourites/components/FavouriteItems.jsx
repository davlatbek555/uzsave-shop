import { useDispatch } from 'react-redux'
import { decrement, increment, removeAll, removeCart } from '../../../store/slices/cart'
import { BlackRatingIcon, CartIcon, HeartIcon, RatingIcon } from '../../../assets/icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { removeFavorite } from '../../../store/slices/favorite'

function FavouriteItems({ product }) {
  const { id, title, mainImage, model, price, qty } = product
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeCart(id))
  }

  const handleIncrement = () => { 
    dispatch(increment(id))
  }

  const handleDecrement = () => {
    dispatch(decrement(id))
  }

  const handleRemoveAll = () => {
    dispatch(removeAll(id));
  }

  const {like, setLike} = useState(false);

  function likeItems(){
    setLike(true)
  }

  const handleUnFavourite = () => {
    dispatch(removeFavorite(id))
  }

  return (
    <div className='favourite-items'>
      <div className="favourite-items__row">
        <div className="favourite-items__image">
          <img src={mainImage} alt={title} />
        </div>

        <div className="favourite-items__content">
          <p className="favourite-items__price">${price.toLocaleString()}</p>
          <ul className='favourite-items__list'>
            <li>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <BlackRatingIcon />
              <BlackRatingIcon />
              <span className='favourite-items__rating'>5.9</span>
            </li>
          </ul>
          <p className="favourite-items__model">{model}</p>
          <div className="favourite-items__button">
            <button className='favourite-items__cardbtn'>
              <CartIcon />
            </button>
          </div>
          <button className='favourite-items__btn' onClick={handleUnFavourite}>
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FavouriteItems