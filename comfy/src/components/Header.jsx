import { Link } from "react-router-dom";
import { SignupWithGoogle, logOut } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/cart/cartSlice";

function Header() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.cartReducer);
  // console.log(user)
  const handleLogin = () => {
    SignupWithGoogle()
      .then(({ user }) => {
        dispatch(addUser(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <header className="btn-neutral py-2 text-neutral-content">
      <div className="mx-auto max-w-6xl px-8  justify-center flex sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
