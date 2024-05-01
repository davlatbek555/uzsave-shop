import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

function OffersProducts() {
    const {productOffers} = useSelector(state => state.home);



    return (
        <div className="offers-products">
            {
                productOffers.list.map(item => (
                <Link to={`/product/${item.slug}`} key={item.id}>
                    <div className="offers-product" key={item.id}>
                        <div className="offers-product__image">
                            <img src={item.mainImage} alt={item.title} />
                            </div>
                        <div className="offers-product__content">
                            <p className="offers-product__title">{item.title.split(' ').slice(0,2).join(' ')}</p>
                            <p className='offers-product__percent'>-{item.discount}%</p>
                        </div>
                    </div>
                </Link>
                ))
            }
        </div>
    )
}

export default OffersProducts