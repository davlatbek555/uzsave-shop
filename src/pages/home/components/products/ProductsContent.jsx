import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductsContent({ category }) {
    const { categories } = useSelector(state => state.home)

    return (
        <div className="products-content">
            <div className="products-content__image">
                <img src={category.image} alt={category.title} />
            </div>
            <div className="products-content__row">
                <h2 className='products-content__title'>{category.title}</h2>
                <Link className='products-content__btn' to={`/category/${category.id}`}>
                    Hozir manba
                </Link>
            </div>
        </div>
    )
}

export default ProductsContent