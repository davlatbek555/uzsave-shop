import React, { useState } from 'react'
import { MessageSmallIcon, BasketIcon, StarIcon } from '../../../assets/icons'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../store/slices/cart'
import { addFavorite } from '../../../store/slices/favorite'
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('Savatga qo\'shildi!');
const Toast  = () => {
  return (
    <div>
      <button className="content-button content-button__primary"onClick={notify}>Savatga qo'shish</button>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

const notify1 = () => toast('Levimlilarga qo\'shildi!', {icon: '❤️',});;
const Toast2  = () => {
  return (
    <div>
      <button className="content-button content-button__primary"onClick={notify1}>Sevimlilarga qo'shish</button>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

function ProductHeader({ product }) {
    const dispatch = useDispatch()
    const [activeImage, setActiveImage] = useState(product.mainImage)

    const handleAdd = () => {
        dispatch(addCart(product))
    }

    console.log(product)

    const handleAddOrder = () => {
        dispatch(addFavorite(product))
    }

    const handleImage = (image) => {
        setActiveImage(image)
    }

    return (
        <div className='product-header'>
            <div className="container">
                <div className="product-header__wrapper">
                    <div className="product-header__image image-wrapper">
                        <div className="image-main">
                            <img src={activeImage} alt={product.title} />
                        </div>
                        <div className="image-list">
				        <img id="slideLeft" className="arrow" src="../public/images/arrow-left.png"/>
                            {  
                            
                                product.images.map((item, key) => (
                                    <button
                                        className={`image-list__item ${item === activeImage ? 'image-list__item_active' : ''}`}
                                        key={key}
                                        onClick={() => handleImage(item)}
                                    >
                                        <img src={item} alt={product.title} />
                                    </button>
                                    
                                ))
                            }
				        <img id="slideRight" className="arrow" src="../public/images/arrow-right.png"/>
                        </div>
                    </div>

                    <div className="product-header__content content__product-header">
                        <h3 className="content-title">
                            {product.title}
                        </h3>
                        <div className="content-row">
                            <div className="content-row__col">
                                <div className="content-stars">
                                    <div className="content-stars__list">
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                        <span className="content-star">
                                            <StarIcon />
                                        </span>
                                    </div>
                                    <span className="content-stars__title">{product.rating}</span>
                                </div>
                            </div>

                            <div className="content-row__col">
                                <span className="content-row__icon">
                                    <MessageSmallIcon />
                                </span>
                                <span className="content-row__text">{product.reviewCount} sharhlar</span>
                            </div>

                            <div className="content-row__col">
                                <span className="content-row__icon">
                                    <BasketIcon />
                                </span>
                                <span className="content-row__text">{product.sold} sotilgan</span>
                            </div>
                        </div>

                        <div className="content-price">
                            {product.oldPrice ? <p className="content-price__old">{product.oldPrice.toLocaleString()} so'm</p> : null}
                            <p className="content-price__new">{product.price?.toLocaleString()} so'm</p>
                        </div>

                        <ul className="content-list">
                            <li className="content-list__item">
                                <strong className="content-list__text">Brend:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">{product.brand.title}</span>
                            </li>
                            <li className="content-list__item">
                                <strong className="content-list__text">Model:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">{product.model}</span>
                            </li>
                            <li className="content-list__item">
                                <strong className="content-list__text">Mavjudligi:</strong>
                                <span className="content-list__line"></span>
                                <span className="content-list__text">Sotuvda mavjud</span>
                            </li>
                        </ul>

                        <div className="content-buttons">
                            <button className="" onClick={handleAdd}>
                                <Toast  />
                                
                            </button>
                            <button className="" onClick={handleAddOrder}>
                                <Toast2 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader