import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "./features/cart/cartSlice";
import { useEffect } from "react";

// pages and layouts
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct
} from './pages'
import { ErrorElement } from "./components";

import {loader as LandingLoader} from './pages/Landing'
import {loader as SingleProductLoader} from './pages/SingleProduct'
import {loader as ProductsLoader} from './pages/Products'

function App() {
  const dispatch = useDispatch()
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Landing/>,
          loader: LandingLoader,
          errorElement: <ErrorElement/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: 'orders',
          element: <Orders/>
        },
        {
          path: 'products',
          element: <Products/>,
          loader: ProductsLoader,
          errorElement: <ErrorElement/>
        },
        {
          path: 'products/:id',
          element: <SingleProduct/>,
          loader: SingleProductLoader,
          errorElement: <ErrorElement/>,
        },
        {
          path: 'cart',
          element: <Cart/>
        },
        {
          path: 'checkout',
          element: <Checkout/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>,
      errorElement: <Error/>
    },
    {
      path: '/register',
      element: <Register/>,
      errorElement: <Error/>
    }
  ])
  // useEffect(() => {
  //   onAuthStateChanged(auth, (info) => {
  //     dispatch(addUser(info));
  //     console.log(info);
  //   });
  // }, []);

  return ( <RouterProvider router={routes}/>
  );
}

export default App;
