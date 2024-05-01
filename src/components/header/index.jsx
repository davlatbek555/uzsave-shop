import { ProfileIcon, CartIcon, HeartIcon } from '../../assets/icons'
import { Link, useNavigate } from 'react-router-dom'
import {MobileIcon,SearchIcon} from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { modalOpen } from '../../store/slices/modals'

function Header() {

    const {isAuth} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleProfile = () => {
        if(isAuth){
            navigate('/profile')
        }else{
            dispatch(modalOpen('registerModal'))
        }
    }

    return (
        <header className='header'>
            <div className="header-top">
                <div className="container">
                    <div className="header-row">
                        <div className="header-logo">
                            <button className='header-mobile__btn'>
                                <MobileIcon />
                            </button>
                            <Link to='/'>
                                <img  className='header_logo' src="/images/logo.jpg" alt="site logo" />
                            </Link>
                        </div>

                        <form className="header-search">
                            <input type="text" placeholder='Qidirmoq...' className="header-search__input" />
                            <button className="header-search__button">
                            <svg  className='header-search__button_icon' data-v-1b1e6dd2="" width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" class="ui-icon  magnifying-glass">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 10.5C15.5 13.2614 13.2614 15.5 10.5 15.5C7.73858 15.5 5.5 13.2614 5.5 10.5C5.5 7.73858 7.73858 5.5 10.5 5.5C13.2614 5.5 15.5 7.73858 15.5 10.5ZM14.3398 15.7451C13.264 16.5341 11.9364 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 11.9364 16.5341 13.264 15.7451 14.3398L19.709 18.3036C20.097 18.6917 20.097 19.3209 19.709 19.709C19.3209 20.097 18.6917 20.097 18.3036 19.709L14.3398 15.7451Z"></path>
                            </svg>    
                            </button>
                        </form>

                        <div className="header-buttons">
                            <button className="header-button profile" onClick={handleProfile}>
                                <span className="header-button__icon">
                                    <ProfileIcon />
                                </span>
                                <span className="header-button__text"> {isAuth ? 'Profil' : 'Kirish'}   </span>
                            </button>
                            <Link to='/favourites'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <HeartIcon />
                                    </span>
                                    <span className="header-button__text">Sevimlilar</span>
                                </button>
                            </Link>
                            <Link to='/cart'>
                                <button className="header-button">
                                    <span className="header-button__icon">
                                        <CartIcon />
                                    </span>
                                    <span className="header-button__text">Savatcha</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <form className="header-search__mobile">
                <label htmlFor="search">
                    <SearchIcon />
                </label>
                <input type="text" id='search' placeholder='Search...' className="header-search__input" />
            </form>
        </header>
    )
}

export default Header