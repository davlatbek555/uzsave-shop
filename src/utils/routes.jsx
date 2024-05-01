import { CartPage, CategoriesPage, FavouritesPage, HomePage, NotFoundPage, ProductPage, ProfilePage } from "../pages";
import CheckoutPage from "../pages/checkout";

export const routes = [
    {
        id: 1,
        component: <HomePage />,
        path: '/'
    },
    {
        id: 2,
        component: <CategoriesPage />,
        path: '/category/:id'
    },
    {
        id: 3,
        component: <NotFoundPage />,
        path: '*'
    },
    {
        id: 4,
        component: <ProductPage />,
        path: '/product/:slug'
    },
    {
        id: 5,
        component: <CartPage />,
        path: '/cart'
    },
    {
        id: 6,
        component: <FavouritesPage />,
        path: '/favourites'
    },
    {
        id: 7,
        component: <CheckoutPage />,
        path: '/checkout'
    },
    {
        id: 7,
        component: <ProfilePage />,
        path: '/profile'
    },
]